const crypto = require('crypto');

// Generate a random 16-byte key
const key = crypto.randomBytes(16);
const iv = crypto.randomBytes(16);

// Encrypt the data
const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
let encrypted = cipher.update('This is a secret message', 'utf8', 'hex');
encrypted += cipher.final('hex');

// Decrypt the data
const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log("Ciphertext:", encrypted);
console.log("Plaintext:", decrypted);
