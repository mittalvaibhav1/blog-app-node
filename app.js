const fs = require('fs');

// To read a file fs.readFile(path, callback(err, data));
// Async function!
fs.readFile('./files/names.txt', (err, data) => {
    if(err) {
        console.log("Error: ", err.message);
    }
    else {
        console.log(data.toString());
    }
});

const text = "Shweta, Pankhuri, Mira, Megha, Monica, Shabnam";

// To write to a file fs.writeFile(path, textToWrite ,callback(err));
// Erase prev data to write new, will create a new file if it doesn't exist
// Async function!
fs.writeFile('./files/newNames.txt', text, (err) => {
    if(err) {
        console.log("Error: ", err.message);
    }
    else {
        console.log("Success!");
    }
});

// To create a new directory fs.mkdir(path + name, callback(error))
// async

fs.mkdir('./test', (err) => {
    if(err) {
        console.log("Error: ", err.message);
    }
    else {
        console.log("Directory Created!");
    }
})

