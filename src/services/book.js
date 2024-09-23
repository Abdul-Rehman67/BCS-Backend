const Book = require('../models/Books')
const addBooksService = async (payload,user) => {
    let duplicates = []
    try {
        const results = [];
        for (let bookPayload of payload) {
            bookPayload={...bookPayload,user}
            const existingBookByName = await Book.find({ title: bookPayload.title,user:user });

            if (existingBookByName.length > 0) {
                duplicates.push({ status: false, message: `Book with ISBN ${bookPayload.ISBN} already exists`, code: 409 });
                continue
            }  else {
                const newBook = await Book.create(bookPayload);
                if (newBook) {
                    results.push({ status: true, message: `Book "${bookPayload.title}" created successfully`});
                } 
            }
        }


        return {results,duplicates}; 
    } catch (err) {
        console.log(err);
        return { status: false, message: "Server Error", code: 500 };
    }
};

const getAllBookService = async (email) => {
    try {
        const book = await Book.find({user:email})
        console.log(book)
        if (book.length > 0) {
            return { status: true, message: "Books Selected Successfully", book, code: 200 };
        }
        else {
            return { status: false, message: "Sorry no books found", code: 404 };
        }
    } catch (err) {
        console.log(err)
        return { status: false, message: "Server Error", code: 500 };
    }

}
const deleteBookService = async (id) => {
    try {
        const book = await Book.findByIdAndDelete(id)
        console.log("deleted",book)
        if (book) {
            return { status: true, message: "Books Deleted Successfully", book };
        }
        else {
            return { status: false, message: "Sorry no book found", code: 404 };
        }
    } catch (err) {
        console.log(err)
        return { status: false, message: "Server Error", code: 500 };
    }

}
const updateBookService = async (payload) => {
    try {
        let id = payload._id
        const book = await Book.findByIdAndUpdate(id,payload)
        console.log(book)
        if (book) {
            return { status: true, message: "Books Updated Successfully", book };
        }
        else {
            return { status: false, message: "Sorry no books found", code: 404 };
        }
    } catch (err) {
        console.log(err)
        return { status: false, message: "Server Error", code: 500 };
    }

}


module.exports = { addBooksService, getAllBookService, updateBookService,deleteBookService }
