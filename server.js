const express = require("express");

// Create express app
const app = express();

// Register view engine
app.set("view engine", "ejs");

// app.set("views", "new name"); To change folder name for views

// Listen for requests
const server = app.listen(3000, "localhost", () => {
    console.log("Listening to requests on port 3000...");
});

// Logger Middleware 

app.use((req, res, next) => {
    console.log("New request made: ");
    console.log("host: ", req.hostname);
    console.log("path", req.path);
    console.log("method: ", req.method);
    next(); // to move to the next block
});

app.get("/", (req, res) => {
    const blogs = [
        {title: "Yoshi finds eggs", snippet: "lorem"},
        {title: "Mario finds stars", snippet: "lorem"},
        {title: "How to defeat bowser", snippet: "lorem"},
    ]
    res.render("index", { title: "Home", blogs});
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About"});
});

app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create"});
})

// Redirect 

app.get("/about-us", (req, res) => {
    res.redirect("about");
});

// Fires for every request if the code reaches this position

app.use((req, res) => {
    res.status(404).render("404", { title: "Not found"});
})



