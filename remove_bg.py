import os
import sys
from PIL import Image
from rembg import remove

input_path = r"C:\Users\ksp56\.gemini\antigravity\brain\599abb65-cc05-49df-9e44-d4706e3fa271\.user_uploaded\media_1795449868725_56e76b14.jpg"
output_path = r"C:\Users\ksp56\.gemini\antigravity\scratch\shiva-portfolio\public\shiva-cutout.png"

print(f"Reading input from: {input_path}")
input_image = Image.open(input_path)

print("Removing background with rembg...")
output_image = remove(input_image)

print(f"Saving transparent PNG to: {output_path}")
output_image.save(output_path, "PNG")
print("Background removal successfully completed!")
