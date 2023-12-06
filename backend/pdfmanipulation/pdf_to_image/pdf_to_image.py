import sys

from pdf2image import convert_from_path

pdfs = [pdf for pdf in sys.argv[1].split(",")]

for pdf in pdfs:
    images = convert_from_path(pdf)
    for i in range(len(images)):
        path = f"{pdf.split('.pdf')[0]}_{str(i + 1)}.jpg"
        print(path)
        images[i].save(path, 'JPEG')

