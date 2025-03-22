const zlib = require('zlib');

// Compress the data
const data = 'This is a secret message';
zlib.deflate(data, (err, buffer) => {
  if (!err) {
    console.log("Compressed:", buffer.toString('base64'));

    // Decompress the data
    zlib.inflate(buffer, (err, buffer) => {
      if (!err) {
        console.log("Decompressed:", buffer.toString());
      }
    });
  }
});
