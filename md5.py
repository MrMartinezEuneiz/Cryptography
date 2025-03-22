import hashlib

# Hash the data
data = b'This is a secret message'
hashed = hashlib.md5(data).hexdigest()

print("MD5 Hash:", hashed)
