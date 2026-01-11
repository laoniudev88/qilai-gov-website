import os
from PIL import Image

image_dir = 'client/public/images'
print(f"{'Filename':<40} {'Resolution':<15} {'Size (KB)':<10}")
print("-" * 65)

for filename in os.listdir(image_dir):
    if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
        filepath = os.path.join(image_dir, filename)
        try:
            with Image.open(filepath) as img:
                width, height = img.size
                size_kb = os.path.getsize(filepath) / 1024
                print(f"{filename:<40} {width}x{height:<14} {size_kb:.1f}")
        except Exception as e:
            print(f"{filename:<40} Error: {e}")
