"""Rebuild the MASTER catalogue files of the website from the original PDF published by MASTER Italy.

    python tools/build_catalogue.py "path/to/CATALOGUE_WEB_2023_18_05.pdf"            # everything
    python tools/build_catalogue.py "path/to/catalogue.pdf" --only light,index          # some steps

Steps (run from the site folder; needs:  pip install pymupdf pillow):
  light  assets/media/master-technical-catalogue-2023.pdf   light copy used by the online reader (pages as images,
                                                            ~58 MB, under GitHub's 100 MB limit) + chapter bookmarks
         assets/img/master-catalogue-cover.webp             cover picture
  pages  assets/media/catalogue-pages/p001.pdf ...          every page on its own, full quality ("Download these pages")
  index  assets/media/master-catalogue-index.json           search: references, words and product names -> pages

Each small object of the PDFs is packed at one place of the file (object streams): the reader can then open
any page by downloading only that part of the file.

A brochure (e.g. a new Brital PDF) only needs the last function:
    python tools/build_catalogue.py "Brochure.pdf" --brochure assets/media/brital-tb25-slim-sliding.pdf

After a new catalogue: update the chapter list below AND `chapters` / `size` in READER.docs.master (js/main.js),
and the link of the complete PDF on masteritaly.com (`download` in READER.docs.master and the two other links).
"""
import argparse
import collections
import io
import json
import os
import re
import sys
import unicodedata

import pymupdf
from PIL import Image

MEDIA = "assets/media"
LIGHT = f"{MEDIA}/master-technical-catalogue-2023.pdf"
PAGES = f"{MEDIA}/catalogue-pages"
INDEX = f"{MEDIA}/master-catalogue-index.json"
COVER = "assets/img/master-catalogue-cover.webp"

# English chapter names, in the order of the catalogue's own bookmarks (from its index page)
CHAPTERS = ["Introduction", "Corner", "Joint", "Latches and junctions", "Various accessories", "Bottom and top hung",
            "Pivot", "Handles and cremone-bolts", "Closing", "Tilt and turn", "Windows automation", "Hinges",
            "Big handles", "Sliding units", "Lift and slide", "Tilt and slide", "Folding opening", "Notes"]


def light(src):
    out = pymupdf.open()
    for i, page in enumerate(src):
        pix = page.get_pixmap(dpi=110)
        im = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
        buf = io.BytesIO()
        im.save(buf, "JPEG", quality=62, optimize=True)
        new = out.new_page(width=page.rect.width, height=page.rect.height)
        new.insert_image(new.rect, stream=buf.getvalue())
        if i == 0:
            im.thumbnail((900, 900))
            im.save(COVER, "WEBP", quality=80)
    toc = src.get_toc()
    if len(toc) == len(CHAPTERS):
        out.set_toc([[1, name, entry[2]] for name, entry in zip(CHAPTERS, toc)])
    else:
        print(f"  ! {len(toc)} bookmarks in the catalogue, {len(CHAPTERS)} names in CHAPTERS: bookmarks not copied")
    out.set_metadata({"title": "MASTER Italy - Technical catalogue (light web version)", "author": "MASTER Italy"})
    out.save(LIGHT, garbage=3, deflate=True, use_objstms=1)
    print(f"  light: {os.path.getsize(LIGHT) / 1e6:.1f} MB, {out.page_count} pages")


def pages(src_path):
    src = pymupdf.open(src_path)  # own copy: the pictures are recompressed in memory
    src.rewrite_images(dpi_threshold=170, dpi_target=150, quality=72)
    os.makedirs(PAGES, exist_ok=True)
    total = 0
    for i in range(src.page_count):
        one = pymupdf.open()
        one.insert_pdf(src, from_page=i, to_page=i)
        one.set_metadata({"title": f"MASTER Italy technical catalogue - page {i + 1}", "author": "MASTER Italy", "producer": ""})
        try:
            one.subset_fonts()
        except Exception:
            pass
        path = f"{PAGES}/p{i + 1:03d}.pdf"
        one.save(path, garbage=4, deflate=True, use_objstms=1)
        total += os.path.getsize(path)
    print(f"  pages: {src.page_count} files, {total / 1e6:.0f} MB")


def index(src):
    ref_re = re.compile(r"(?<![\d.,])(\d{4}[A-Z]{0,2}(?:\.\d{1,3}[A-Z]{0,2})?)(?:S/D|/[A-Z]{1,2})?(?![\d,]|\s?mm)")
    word_re = re.compile(r"[a-z][a-z0-9-]{2,}")
    plain = lambda s: unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode().lower()
    n = src.page_count
    refs, words = collections.defaultdict(set), collections.defaultdict(set)
    caps, freq = [], collections.Counter()
    for i in range(n):
        text = src[i].get_text()
        for m in ref_re.finditer(text):
            refs[m.group(1)].add(i + 1)
        for w in set(word_re.findall(plain(text))):
            words[w].add(i + 1)
        lines = []
        for ln in text.splitlines():
            ln = re.sub(r"\s+", " ", ln.replace("�", "")).strip(" -|")
            if 3 <= len(ln) <= 32 and ln.upper() == ln and re.search(r"[A-Z]{3}", ln) and not re.search(r"\d{4}", ln):
                lines.append(ln)
        caps.append(lines)
        freq.update(set(lines))
    # product names of a page: capital lines that are not repeated headers
    labels = {}
    for i, lines in enumerate(caps):
        keep = []
        for ln in lines:
            if freq[ln] <= 25 and ln not in keep:
                keep.append(ln)
            if len(keep) == 2:
                break
        if keep:
            labels[i + 1] = " · ".join(keep)
    data = {
        "pages": n,
        "refs": {r: sorted(p) for r, p in refs.items()},
        # words found on most pages say nothing
        "words": {w: sorted(p) for w, p in words.items() if len(p) <= n * 0.35 and not w.isdigit()},
        "labels": labels,
    }
    with open(INDEX, "w", encoding="utf-8") as f:
        json.dump(data, f, separators=(",", ":"))
    print(f"  index: {len(data['refs'])} references, {len(data['words'])} words, {os.path.getsize(INDEX) / 1e3:.0f} KB")


def brochure(src_path, dst):
    doc = pymupdf.open(src_path)
    doc.save(dst, garbage=3, deflate=True, use_objstms=1)
    print(f"  brochure: {dst}, {doc.page_count} pages, {os.path.getsize(dst) / 1e6:.1f} MB")


if __name__ == "__main__":
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("pdf", help="original PDF")
    ap.add_argument("--only", default="light,pages,index", help="steps to run, comma separated")
    ap.add_argument("--brochure", metavar="DEST", help="optimise a brochure for the reader and save it at DEST")
    args = ap.parse_args()
    if not os.path.isdir(MEDIA):
        sys.exit("Run this script from the website folder (the one with index.html).")
    if args.brochure:
        brochure(args.pdf, args.brochure)
        sys.exit()
    source = pymupdf.open(args.pdf)
    steps = args.only.split(",")
    if "light" in steps:
        light(source)
    if "pages" in steps:
        pages(args.pdf)
    if "index" in steps:
        index(source)
