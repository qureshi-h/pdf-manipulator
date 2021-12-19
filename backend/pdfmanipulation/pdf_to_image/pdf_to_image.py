import sys
from pdf2image import convert_from_path

pdfs = [pdf for pdf in sys.argv[1].split(",")]

for pdf in pdfs:
    images = convert_from_path(pdf)
    for i in range(len(images)):
        path = pdf.split(".pdf")[0] + str(i) + '.jpg'
        print(path)
        images[i].save(path, 'JPEG')

