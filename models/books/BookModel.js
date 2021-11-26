const { Schema, model } = require("mongoose");

const bookPattern = {
  title: { type: String, required: true },
  author: { type: String, required: true },
  editorial: { type: String },
  year: { type: Number, required: true },
};

const BookSchema = new Schema(bookPattern);
const BookModel = model("books", BookSchema);

module.exports = BookModel;
