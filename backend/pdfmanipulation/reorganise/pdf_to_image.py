import sys
from pdf2image import convert_from_path

images = convert_from_path(sys.argv[1])
for i in range(len(images)):
    path = sys.argv[1].split(".pdf")[0] + str(i) + '.jpg'
    print(path)
    images[i].save(path, 'JPEG')

