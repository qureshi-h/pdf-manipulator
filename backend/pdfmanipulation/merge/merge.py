import sys
from PyPDF2 import PdfFileMerger

''' Merges all the pdf files in current directory '''
merger = PdfFileMerger()

all_pdfs = [pdf for pdf in sys.argv[1].split(",")]
[merger.append(pdf) for pdf in all_pdfs]

filename = "Merged.pdf"
path = "/".join(sys.argv[1].split(",")[0].split("/")[:-1]) + "/" + filename

with open(path, "wb") as new_file:
    merger.write(new_file)

print(path, end="")
