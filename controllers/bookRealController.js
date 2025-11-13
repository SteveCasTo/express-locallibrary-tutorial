const Book = require("../models/book");

exports.list = async (req, res, next) => {
  try {
    const books = await Book.find().populate('author').populate('genre').exec();
    res.json(books);
  } catch (err) {
    next(err);
  }
};

exports.detail = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id).populate('author').populate('genre').exec();
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { title, author, summary, isbn, genre } = req.body;
    if (!title || !author || !summary || !isbn) {
      return res.status(400).json({ message: 'title, author, summary and isbn are required' });
    }
    const book = new Book({ title, author, summary, isbn, genre });
    const saved = await book.save();
    const populated = await Book.findById(saved._id).populate('author').populate('genre').exec();
    res.status(201).json(populated);
  } catch (err) {
    next(err);
  }
};