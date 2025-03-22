import zlib

# Compress the data
data = b'This is a secret message'
compressed = zlib.compress(data)

# Decompress the data
decompressed = zlib.decompress(compressed)

print("Compressed:", compressed)
print("Decompressed:", decompressed)
