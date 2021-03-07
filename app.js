const interval = global.setInterval(() => {
    global.console.log("Hey, Inside Interval!");
}, 1000);

global.setTimeout(() => {
    global.clearInterval(interval);
}, 3000);

console.log(__filename);
console.log(__dirname);

