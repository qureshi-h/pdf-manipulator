from pdf2image import convert_from_path
import sys

images = convert_from_path('..' + sys.argv[1])

for i in range(len(images)):
    # Save pages as images in the pdf
    images[i].save('page' + str(i) + '.jpg', 'JPEG')