
const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: String, required: true },
    genre: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: String, required: true },
    status: { type: String, required: true,default:'Reading' },
   
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;