import os
from PIL import Image

# ----------- CONFIG -----------
GALLERY_DIR = 'C:/Users/jgath/justus-farm/public/real-images'
SUPPORTED_EXTENSIONS = ('.jpg', '.jpeg', '.png', '.bmp', '.tiff')  # Extend as needed
# ------------------------------

def convert_to_webp(filepath: str):
    try:
        filename = os.path.basename(filepath)
        name, ext = os.path.splitext(filename)

        if ext.lower() == '.webp':
            print(f"⏩ Skipping already in WebP format: {filename}")
            return

        webp_path = os.path.join(GALLERY_DIR, f"{name}.webp")
        # Avoid overwriting if .webp already exists
        if os.path.exists(webp_path):
            print(f"⏩ WebP already exists: {webp_path}")
            return

        with Image.open(filepath) as img:
            img.convert("RGB").save(webp_path, "webp")
            print(f"✔ Converted: {filename} → {name}.webp")

    except Exception as e:
        print(f"✖ Failed to convert {filepath}: {e}")

def main():
    for file in os.listdir(GALLERY_DIR):
        full_path = os.path.join(GALLERY_DIR, file)
        if os.path.isfile(full_path) and file.lower().endswith(SUPPORTED_EXTENSIONS):
            convert_to_webp(full_path)

if __name__ == "__main__":
    main()
