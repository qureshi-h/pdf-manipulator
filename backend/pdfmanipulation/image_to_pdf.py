import sys
from PIL import Image

# im1 = Image.open("/Users/apple/Desktop/bbd.jpg")
# im2 = Image.open("/Users/apple/Desktop/bbd1.jpg")
# im3 = Image.open("/Users/apple/Desktop/bbd2.jpg")
# im_list = [im2,im3]
#
filename = "/".join(sys.argv[1].split(",")[0].split("/")[:-1]) + "/" + "out.pdf"
#
# im1.save(pdf1_filename, "PDF" ,resolution=100.0, save_all=True, append_images=im_list)
images = [Image.open(image) for image in sys.argv[1].split(",")]

images[0].save(filename, "PDF", resolution=100.0, save_all=True, append_images=images[1:])

print(filename, end="")
