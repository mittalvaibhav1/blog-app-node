const express = require("express");
const Blog = require("../models/blog");

const router = express.Router();

router.get("/", (req, res) => {
    Blog.find().sort({ createdAt: - 1})
    .then((result) => {
        res.render("index", { title: "Home", blogs: result });
    })
    .catch((err) => {
        console.log(err);
    })
});

router.post("/", (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
    .then((result) => {
        res.redirect("/blogs");
    })
    .catch((err) => {
        console.log(err);
    })
});

router.get("/create", (req, res) => {
    res.render("create", { title: "Create"});
});

router.get("/:id", (req, res) => {
    Blog.findById(req.params.id)
    .then((result) => {
        res.render("blog", { title: "Blog Details", blog: result });
    })
    .catch((err) => {
        console.log(err);
    })
});

router.delete("/:id", (req, res) => {
    Blog.findByIdAndDelete(req.params.id)
    .then(result => {
        res.json({
            redirect: "/blogs"
        });
    })
    .catch(err => {
        console.log(err);
    });
});

module.exports = router;