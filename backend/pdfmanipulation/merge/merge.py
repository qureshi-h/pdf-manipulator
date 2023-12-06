

import sys
from PyPDF2 import PdfWriter

''' Merges all the pdf files in current directory '''

all_pdfs = [pdf for pdf in sys.argv[1].split(",")]
# [merger.append(pdf) for pdf in all_pdfs]

filename = "merged.pdf"
path = "/".join(sys.argv[1].split(",")[0].split("/")[:-1]) + "/" + filename


merger = PdfWriter()
for pdf_file in all_pdfs:
    merger.append(pdf_file)

merger.write(path)

print(path, end="")
