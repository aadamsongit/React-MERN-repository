const mongoose = require("mongoose");

const ProductManagerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required!"],
    minlength: [5, "Title must be at least five characters"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
});

const ProductManager = mongoose.model("ProductManager", ProductManagerSchema);

module.exports = ProductManager;
