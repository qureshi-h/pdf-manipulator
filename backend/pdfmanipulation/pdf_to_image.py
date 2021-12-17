
import subprocess
import sys
import os

# def install(package):
# subprocess.check_call([sys.executable, "-m", "pip", "install", "pdf2image"])

# # print(install("pdf2image"))

# # import pkg_resources
# # installed_packages = pkg_resources.working_set
# # installed_packages_list = sorted(["%s==%s" % (i.key, i.version) for i in installed_packages])
# # print(installed_packages_list)
print(os.listdir("./uploads/1/alpha"))

from pdf2image import convert_from_path

print(sys.argv[1])

images = convert_from_path(sys.argv[1])
for i in range(len(images)):
    path = sys.argv[1].split(".pdf")[0] + str(i) + '.jpg'
    print(path)
    images[i].save(path, 'JPEG')

