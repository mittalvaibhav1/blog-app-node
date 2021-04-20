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

// Mongoose!

app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: "new-blog",
        snippet: "my new blog",
        body: "lorem"
    });

    blog.save()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
});

app.get("/all-blogs", (req, res) => {
    Blog.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
})

app.get("/single-blog", (req, res) => {
    Blog.findById("607f0dce60e04724a8869fae")
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
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



