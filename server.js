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



