const express = require("express");

// Create express app
const app = express();

// Listen for requests
const server = app.listen(3000, "localhost", () => {
    console.log("Listening to requests on port 3000...");
});

app.get("/", (req, res) => {
    res.json("Hello");
});