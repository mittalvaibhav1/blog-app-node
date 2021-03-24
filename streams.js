const fs = require('fs');

// ReadStream is used to read data.

const readStream = fs.createReadStream('./files/largeData.txt', { encoding: 'utf-8' });
readStream.on('data', (chunk) => {
    console.log('----- NEW CHUNK -----');
    console.log(chunk);
})