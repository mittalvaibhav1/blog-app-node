const express = require("express");

// Create express app
const app = express();

// Listen for requests
const server = app.listen(3000, "localhost", () => {
    console.log("Listening to requests on port 3000...");
});

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get("/about", (req, res) => {
    // res.sendFile(__dirname + "/views/about.html");
    // or
    res.sendFile("./views/about.html", {root : __dirname});
});

app.get("/ok", (req, res) => {
    res.send("ok");
});

