const express = require("express");
const router = express.Router();
const BookModel = require("../../models/books/BookModel");

const newUpdate = { new: true };

//!Task 6 ---------------------------
router.post("/create", async (req, res) => {
  const { body } = req;

  try {
    const newBook = await BookModel.create({ ...body });
    if (!newBook) return res.status(404).send("No new book is added.");
    return res.status(200).send("New book is added.");
  } catch (err) {
    return res.status(404).send(err.message);
  }
});

//!Task 8.1 show all books---------------------
router.get("/", async (req, res) => {
  try {
    const books = await BookModel.find();
    if (!books || books.length === 0) return res.send("No book is here.");
    return res.status(200).json(books);
  } catch (err) {
    return res.status(404).send(err.message);
  }
});

//!Task 8.2 search by ID ---------------------
router.get("/search/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const book = await BookModel.findById(id);
    if (!book || book.length === 0) return res.send("Book is not found.");
    return res.status(200).json(book);
  } catch (err) {
    return res.status(404).send(err.message);
  }
});

//!Task 8.3 search by author ---------------------
router.get("/search/author/:author", async (req, res) => {
  const authorName = { author: req.params.author };

  try {
    const book = await BookModel.findOne(authorName);
    if (!book || book.length === 0) return res.send("Book is not found.");
    return res.status(200).json(book);
  } catch (err) {
    return res.status(404).send(err.message);
  }
});

//!Task 8.4 update the field ---------------------
router.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { title, author, editorial, year } = req.body;

  const updateContent = {
    title: title,
    author: author,
    editorial: editorial,
    year: year,
  };

  try {
    const updatedBook = await BookModel.findByIdAndUpdate(
      id,
      updateContent,
      newUpdate
    );

    if (!updatedBook) return res.send("Book is not found.");
    return res
      .status(200)
      .json({ message: " Book is updated", updateBook: updatedBook });
  } catch (err) {
    return res.status(404).send(err.message);
  }
});

//!Task 8.5 delete book ---------------------
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteBook = await BookModel.findByIdAndDelete(id);
    if (!deleteBook) return res.send("Book is not found.");
    return res.status(200).json("Book is deleted");
  } catch (err) {
    return res.status(404).send(err.message);
  }
});

//! Bonus 1 -----------------------------------

router.get("/search/title/:title", async (req, res) => {
  const title = req.params.title;
  try {
    const allBooks = await BookModel.find();
    const books = allBooks.filter((book) => book.title.includes(title));

    if (!books || books.length === 0 || !allBooks || allBooks.length === 0)
      return res.send("No book is found.");

    return res.status(200).json(books);
  } catch (err) {
    return res.status(404).send(err.message);
  }
});

//! Bonus 2 -----------------------------------

router.get("/find/year", async (req, res) => {
  const rangeLow = req.query.rangelow;
  const rangeHigh = req.query.rangehigh;

  try {
    const allBooks = await BookModel.find();
    const books = allBooks.filter(
      (book) => book.year >= rangeLow && book.year <= rangeHigh
    );

    if (!books || books.length === 0 || !allBooks || allBooks.length === 0)
      return res.send("No book is found.");

    return res.status(200).json(books);
  } catch (err) {
    return res.status(404).send(err.message);
  }
});

module.exports = router;
