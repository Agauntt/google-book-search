const express = require("express");;
const router = express.Router();

// Book Model
const Book = require("../models/Book");


// GET route to return all saved books as JSON
router.get("/", (req, res) => {
    Book.find()
        .sort({ date: -1})
        .then(books => res.json(books))
});

// GET route to retrieve a single book by title
router.get("/:id", (req, res) => {
    Book.findOne({title: req.params.id})
        .then(book => res.json(book))
});

// POST route to save a new book to the database
router.post("/", (req, res) => {
    const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link
    });

    newBook.save()
           .then(book => res.json(book));

})

// DELETE route to remove a book by ID
router.delete("/:id", (req, res) => {
    Book.findById(req.params.id)
        .then(book => book.remove()
        .then(() => res.json({ success: true})))
})

module.exports = router;