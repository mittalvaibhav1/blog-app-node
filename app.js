// STREAMS ARE BETTER FOR LARGER DATA FILES!!!

const fs = require('fs'); // file system

// We pass relative paths here

// To read a file fs.readFile(path, callback(err, data));
// Async function!
// fs.readFile('./files/names.txt', (err, data) => {
//     if(err) {
//         console.log("Error: ", err.message);
//     }
//     else {
//         console.log(data.toString()); // By default returns a buffer so we convert it to a string
//     }
// });

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
// Async

// fs.existsSync(pathname)
// checks if the file exists or not

// fs.rmdir(path, callback(err)) used to delete a directory
// Async!!
// Cannot delete a directory if it's not empty!

if(!fs.existsSync('./test')) { 
    fs.mkdir('./test', (err) => {
        if(err) {
            console.log("Error: ", err.message);
        }
        else {
            console.log("Directory Created!");
        }
    });
}
else {
    fs.rmdir('./test', (err) => {
        if(err) {
            console.log("Error: ", err.message);
        }
        else {
            console.log("Directory deleted!");
        }
    })
}


// fs.unlink(path, callback(err)) used to delete a file
// Async!!

if(fs.existsSync('./files/names.txt')) {
    fs.unlink('./files/names.txt', (err) => {
        if(err) {
            console.log("Error: ", err.message);
        }
        else {
            console.log("File Deleted!");
        }
    })
}



