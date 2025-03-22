import base64

# Encode the data
data = b'This is a secret message'
encoded = base64.b64encode(data)

# Decode the data
decoded = base64.b64decode(encoded)

print("Encoded:", encoded)
print("Decoded:", decoded)
