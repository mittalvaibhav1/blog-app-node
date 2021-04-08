const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log("Request Made", req.method, req.url);
    res.setHeader("Content-Type", "text/html");
    fs.readFile("./views/index.html", (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        }
        else {
            res.write(data);
            res.end();
        }
    } )
});

server.listen(3000, "localhost", () => {
    console.log("This server is listening on port 3000...");
})