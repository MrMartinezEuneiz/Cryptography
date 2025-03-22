import hashlib

# Hash the data
data = b'This is a secret message'
hashed = hashlib.sha256(data).hexdigest()

print("SHA-256 Hash:", hashed)
