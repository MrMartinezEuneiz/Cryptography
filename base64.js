// Encode the data
const data = 'This is a secret message';
const encoded = Buffer.from(data).toString('base64');

// Decode the data
const decoded = Buffer.from(encoded, 'base64').toString('ascii');

console.log("Encoded:", encoded);
console.log("Decoded:", decoded);
