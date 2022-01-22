import sys
from zipfile import ZipFile

images = [image for image in sys.argv[1].split(",")]
path = "/".join(sys.argv[1].split(",")[0].split("/")[:-1]) + "/" + "images.zip"

zipObj = ZipFile(path, 'w')

for image in images:
    if image:
        zipObj.write(image, image.split("/")[3])

zipObj.close()

print(path, end="")
