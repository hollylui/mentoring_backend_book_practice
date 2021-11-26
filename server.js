const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

// global middleware --------------------
app.use(express.json());
app.use(cors());

// mongoose ------------------------------
const { DB_USER, DB_PASS, DB_HOST, DB_NAME, PORT } = process.env;
const mongooseDbURL = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(mongooseDbURL)
  .then(() => console.log("Database is connected."))
  .catch((err) => console.log(err));

//  routes ----------------------------------------
const bookRoute = require("./routes/books/bookRoute");

app.use("/books", bookRoute);

app.listen(PORT, () => console.log("Server is listening."));
