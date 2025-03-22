const crypto = require('crypto');

// Hash the data
const data = 'This is a secret message';
const hashed = crypto.createHash('sha256').update(data).digest('hex');

console.log("SHA-256 Hash:", hashed);
