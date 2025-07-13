import os
import json
from PIL import Image

# Path to the gallery folder
GALLERY_DIR = 'C:/Users/jgath/justus-farm/public/real-images'

images = []

for filename in os.listdir(GALLERY_DIR):
    if filename.lower().endswith(('.webp')):
        filepath = os.path.join(GALLERY_DIR, filename)
        with Image.open(filepath) as img:
            width, height = img.size
            images.append({
                "src": f"/gallery/{filename}",
                "alt": filename.replace('-', ' ').replace('_', ' ').rsplit('.', 1)[0],
                "width": width,
                "height": height
            })

# Save to JSON file
with open('C:/Users/jgath/justus-farm/lib/galleryData.json', 'w') as json_file:
    json.dump(images, json_file, indent=2)

print("✅ Done! galleryData.json created.")
