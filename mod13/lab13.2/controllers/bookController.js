const Book = require('../models/Book');

//create a book
const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

//get all books

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching all book' });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      res.status(400).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching the book' });
  }
};

//delete Book
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      res.status(400).json({ message: 'Book not found!' });
    }
    res.json({ message: `${book.title} is deleted` });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Invalid ID' });
  }
};

//update a book
const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // if (!book) {
    // 	res.status(400).json({ message: "That book id does not exist" });
    // }
    res.json(book);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Invalid ID' });
  }
};

// filter
const filterBook = async (req, res) => {
  try {
    const { minPrice, maxPrice } = req.query;
    const filter = {};
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gt = Number(minPrice);
      if (maxPrice) filter.price.$lt = Number(maxPrice);
    }
    const books = await Book.find(filter).select({
      title: 1,
      price: 1,
      _id: 0,
    });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//sort
const sortBooks = async (req, res) => {
  try {
    const { sortBy = 'price', order = 'asc' } = req.query;
    const sortOrder = order === 'desc' ? -1 : 1;
    const sortObj = {};
    sortObj[sortBy] = sortOrder;
    const books = await Book.find().sort(sortObj).select({
      title: 1,
      price: 1,
      _id: 0,
    });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  deleteBook,
  updateBook,
  filterBook,
  sortBooks,
};
