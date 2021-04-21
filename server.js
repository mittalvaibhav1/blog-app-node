const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// Create express app
const app = express();

// Connect to mongodb
const dbURI = "mongodb+srv://admin:test1234@blogsite.gcfxl.mongodb.net/blogsite?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => {
    console.log("Connected to db");
    app.listen(3000, "localhost", () => {
        console.log("Listening to requests on port 3000...");
    });
})
.catch((err) => {
    console.log(err)
});

// Register view engine
app.set("view engine", "ejs");

// Logger Middleware 

app.use(morgan("dev"));

// Static file server

app.use(express.static("static"));

app.get("/", (req, res) => {
    res.redirect("/blogs")
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About"});
});

app.get("/blogs", (req, res) => {
    Blog.find().sort({ createdAt: - 1})
    .then((result) => {
        res.render("index", { title: "Home", blogs: result });
    })
    .catch((err) => {
        console.log(err);
    })
});

app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create"});
});

// 404 page

app.use((req, res) => {
    res.status(404).render("404", { title: "Not found"});
});
