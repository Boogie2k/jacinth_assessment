
const bookRouter = require("express").Router();

const {createBook, getBook, getBooks,deleteBook } = require("../controller/booksController");

bookRouter.post("/books", createBook);
bookRouter.get("/books", getBooks);
bookRouter.get("/books/:id", getBook);
bookRouter.delete("/books/:id", deleteBook);


module.exports = bookRouter ;

