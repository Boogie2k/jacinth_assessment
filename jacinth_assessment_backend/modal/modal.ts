const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    author: String,
    price: Number,
    rating: Number,
    category: String,
    image: String,
    date_release: Date,
    review: String,

  },
  { timestamps: true }
);

module.exports = mongoose.model("Books", bookSchema);
