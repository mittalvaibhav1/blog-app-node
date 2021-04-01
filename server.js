const http = require("http");

// To create a server!
// http.createServer(callback(request, response))
// This callback runs everytime you make a request to the server.
const server = http.createServer((request, response) => {
    console.log(request.url);
    console.log(request.method);
});

// To make our server listen to requests.
// server.listen(portnumber, hostname, callback)
server.listen(3000, "localhost", () => {
    console.log("Listening for requests on port 3000.");
})
