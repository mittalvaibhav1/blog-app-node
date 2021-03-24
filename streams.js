const fs = require('fs');

// ReadStream is used to read data.
// WriteStream is used to write data. // creates the file if it doesn't exist or overwrites previous data

const readStream = fs.createReadStream('./files/largeData.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./files/output.txt');

readStream.on('data', (chunk) => {
    writeStream.write(chunk);
})