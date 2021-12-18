import sys
from PIL import Image

filename = sys.argv[1].split(",")[0].split("/")[3].split(".jpg")[0][:-1] + " - Reordered.pdf"
path = "/".join(sys.argv[1].split(",")[0].split("/")[:-1]) + "/" + filename

images = [Image.open(image) for image in sys.argv[1].split(",")]

images[0].save(path, "PDF", resolution=100.0, save_all=True, append_images=images[1:])

print(path, end="")
