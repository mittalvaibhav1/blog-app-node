const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

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

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.redirect("/blogs");
});

app.use(blogRoutes);

app.get("/about", (req, res) => {
    res.render("about", { title: "About"});
});

// 404 page

app.use((req, res) => {
    res.status(404).render("404", { title: "Not found"});
});
