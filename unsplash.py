import os
import re
import json
import requests
from io import BytesIO
from PIL import Image

# ---------- CONFIG ----------
download_dir = "C:/Users/jgath/justus-farm/public/gallery"
os.makedirs(download_dir, exist_ok=True)

# images_json = """
# [
#   {"src":"https://images.unsplash.com/photo-1589923188651-268a9765e432?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"Closeup of a fluffy chick in a brooder"},
#   {"src":"https://images.unsplash.com/photo-1613684574327-dc32b58b2fca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"Group of newborn chicks"},
#   {"src":"https://images.unsplash.com/photo-1694854038360-56b29a16fb0c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"many chicks in a well lit brooder"},
#   {"src":"https://images.unsplash.com/photo-1442689859438-97407280183f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"duck chicks"},
#   {"src":"https://images.pexels.com/photos/375510/pexels-photo-375510.jpeg?auto=compress&w=600&q=80", "alt":"White hen with red comb"},
#   {"src":"https://plus.unsplash.com/premium_photo-1664527009188-a8f5e05589fb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"Female improved kienyeji hen"},
#   {"src":"https://plus.unsplash.com/premium_photo-1661964158054-f8ec74178017?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"kienyeji chickens"},
#   {"src":"https://images.unsplash.com/photo-1578051696754-4652a8f67882?q=80&w=326&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"White hen with red comb 2"},
#   {"src":"https://images.unsplash.com/photo-1678989912659-5a06072c5955?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"White hen with red comb 2"},
#   {"src":"https://images.unsplash.com/photo-1465153690352-10c1b29577f8?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"Luen duck"},
#   {"src":"https://images.unsplash.com/photo-1534627760265-69713192ade4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"Luen duck 2"},
#   {"src":"https://images.unsplash.com/photo-1564149567196-0c1d8bb7148f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"Goose"},
#   {"src":"https://images.unsplash.com/photo-1702238151745-f721a21a27ab?q=80&w=842&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"Goose 2"},
#   {"src":"https://plus.unsplash.com/premium_photo-1668268397144-5bb0d5d2a8bb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"male Turkey strutting in field"},
#   {"src":"https://plus.unsplash.com/premium_photo-1669754166793-db090505baf1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"male Turkey potrait"},
#   {"src":"https://images.unsplash.com/photo-1461037506617-211749beac60?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"Group of turkeys in a field"},
#   {"src":"https://images.unsplash.com/photo-1560011961-4ab41261de01?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"Beautiful male turkey in a field"},
#   {"src":"https://images.unsplash.com/photo-1583147474478-f8920da507ca?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"Guinea fow lying on the ground"},
#   {"src":"https://images.unsplash.com/photo-1583147386746-3ba0c0799d79?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"Group of guinea fowl feeding"},
#   {"src":"https://images.unsplash.com/photo-1647641639865-b509748cad4f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"group of guinea fowl"},
#   {"src":"https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=743&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"Fresh eggs in a basket"},
#   {"src":"https://images.unsplash.com/photo-1725781188703-32f11fd53fe4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"Guinea fowl eggs"},
#   {"src":"https://images.unsplash.com/photo-1639194335563-d56b83f0060c?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"kienyeji eggs"}
# ]
# """

images_json = """
[
  {"src":"https://grow.ifa.coop/hubfs/intro-chicks-2-hens-article-img1b.jpg", "alt":"Two-Weeks-Old Pullet (F1 Improved Kienyeji)"},
  {"src":"https://plus.unsplash.com/premium_photo-1661963727132-9211f11634d5?q=80&w=895&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"Mature Kienyeji Chicken"},
  {"src":"https://images.unsplash.com/photo-1463164490908-f45da921edde?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"Brown Kienyeji Chicken"},
  {"src":"https://images.unsplash.com/photo-1535275226173-7ee8b465f0c1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"Improved Kienyeji Chicken (Sasso)"},
  {"src":"https://images.unsplash.com/photo-1645216040577-cad169d11bd4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"Female Turkey"},
  {"src":"https://media.istockphoto.com/id/1479902954/photo/muscovy-duck.jpg?s=1024x1024&w=is&k=20&c=AeJyrtVM20aV2_ZN-Mrtq0s3h2WpDMNfEQJT7xl4fco=", "alt":"Muscovy Duck (Kiengei)"},
  {"src":"https://images.unsplash.com/photo-1463164490908-f45da921edde?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"Brown Kienyeji Chicken"},
  {"src":"https://images.unsplash.com/photo-1598101446154-30a086e7ae59?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"White Goose"},
  {"src":"https://images.unsplash.com/photo-1674067578290-451b31c702a2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"Guinea Fowl Chicks"}
  {"src":"https://images.unsplash.com/photo-1647641639865-b509748cad4f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "alt":"Exotic Guinea Fowl"}
  
]
"""


images = json.loads(images_json)
# --------------------------------

def slugify(text: str) -> str:
    text = re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')
    return re.sub(r'-{2,}', '-', text)

def unique_filepath(base_slug: str) -> str:
    filename = f"{base_slug}.webp"
    path = os.path.join(download_dir, filename)

    if not os.path.exists(path):
        return path

    idx = 1
    while True:
        suffix = "-copy" if idx == 1 else f"-copy-{idx}"
        filename = f"{base_slug}{suffix}.webp"
        path = os.path.join(download_dir, filename)
        if not os.path.exists(path):
            return path
        idx += 1

def download_convert(img_obj: dict):
    url = img_obj["src"]
    slug = slugify(img_obj["alt"])
    filepath = unique_filepath(slug)

    try:
        print(f"▶ Downloading {url}")
        resp = requests.get(url, timeout=10)
        resp.raise_for_status()

        Image.open(BytesIO(resp.content)).convert("RGB").save(filepath, "webp")
        print(f"✔ Saved → {filepath}")
    except Exception as e:
        print(f"✖ Error processing {url}: {e}")

def main():
    for img in images:
        download_convert(img)

if __name__ == "__main__":
    main()
