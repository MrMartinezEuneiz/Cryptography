from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes

# Generate a random 16-byte key
key = get_random_bytes(16)
cipher = AES.new(key, AES.MODE_EAX)

# Encrypt the data
data = b'This is a secret message'
ciphertext, tag = cipher.encrypt_and_digest(data)

# Decrypt the data
cipher = AES.new(key, AES.MODE_EAX, nonce=cipher.nonce)
plaintext = cipher.decrypt(ciphertext)

print("Ciphertext:", ciphertext)
print("Plaintext:", plaintext)
