const crypto = require('crypto');

// Hash the data
const data = 'This is a secret message';
const hashed = crypto.createHash('md5').update(data).digest('hex');

console.log("MD5 Hash:", hashed);
