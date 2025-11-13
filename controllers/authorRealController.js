const Author = require("../models/author");

exports.list = async (req, res, next) => {
  try {
    const authors = await Author.find().exec();
    res.json(authors);
  } catch (err) {
    next(err);
  }
};

exports.detail = async (req, res, next) => {
  try {
    const author = await Author.findById(req.params.id).exec();
    if (!author) return res.status(404).json({ message: 'Author not found' });
    res.json(author);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { first_name, family_name, date_of_birth, date_of_death } = req.body;
    if (!first_name || !family_name) {
      return res.status(400).json({ message: 'first_name and family_name are required' });
    }
    const author = new Author({ first_name, family_name, date_of_birth, date_of_death });
    const saved = await author.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};