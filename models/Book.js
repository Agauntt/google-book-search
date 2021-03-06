const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// New Book Schema
const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String 
    },
    link: {
        type: String
    }

})

module.exports = Book = mongoose.model("book", BookSchema);