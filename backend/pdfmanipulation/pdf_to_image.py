
# import subprocess
# import sys

# def install(package):
#     subprocess.check_call([sys.executable, "-m", "pip", "install", package])

# print(install("pdf2image"))

# import pkg_resources
# installed_packages = pkg_resources.working_set
# installed_packages_list = sorted(["%s==%s" % (i.key, i.version) for i in installed_packages])
# print(installed_packages_list)

# from pdf2image import convert_from_path
# # import sys

# images = convert_from_path(sys.argv[1])
# for i in range(len(images)):
#     path = sys.argv[1].split(".pdf")[0] + str(i) + '.jpg'
#     print(path)
#     images[i].save(path, 'JPEG')

print("hello world")