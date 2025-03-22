const NodeRSA = require('node-rsa');

// Generate RSA key pair
const key = new NodeRSA({ b: 512 });

// Encrypt the data
const encrypted = key.encrypt('This is a secret message', 'base64');

// Decrypt the data
const decrypted = key.decrypt(encrypted, 'utf8');

console.log("Ciphertext:", encrypted);
console.log("Plaintext:", decrypted);
