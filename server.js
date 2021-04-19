const express = require("express");

// Create express app
const app = express();

// register view engine

app.set("view engine", "ejs");
// app.set("views", "new name"); To change folder name for views

// Listen for requests
const server = app.listen(3000, "localhost", () => {
    console.log("Listening to requests on port 3000...");
});

app.get("/", (req, res) => {
    res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
    // res.sendFile(__dirname + "/views/about.html");
    // or
    res.sendFile("./views/about.html", {root : __dirname});
});

// Redirect 
app.get("/about-us", (req, res) => {
    res.redirect("about");
});

// Fires for every page if the code reaches this position
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})



