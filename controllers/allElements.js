const Author = require('../models/author');
const Book = require('../models/book');
const Genre = require('../models/genre');
const BookInstance = require('../models/bookinstance');

exports.all = async (req, res, next) => {
  try {
    const [authors, books, genres, bookinstances] = await Promise.all([
      Author.find().exec(),
      Book.find().populate('author').populate('genre').exec(),
      Genre.find().exec(),
      BookInstance.find().populate('book').exec(),
    ]);
    res.json({ authors, books, genres, bookinstances });
  } catch (err) {
    next(err);
  }
};