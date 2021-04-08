const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Request Made", req.method, req.url);
    res.setHeader("Content-Type", "text/plain");
    res.write("Hello Ji");
    res.end();
});

server.listen(3000, "localhost", () => {
    console.log("This server is listening on port 3000...");
})