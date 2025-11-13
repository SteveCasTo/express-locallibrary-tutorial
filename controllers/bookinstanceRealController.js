const BookInstance = require("../models/bookinstance");

exports.list = async (req, res, next) => {
  try {
    const instances = await BookInstance.find().populate('book').exec();
    res.json(instances);
  } catch (err) {
    next(err);
  }
};

exports.detail = async (req, res, next) => {
  try {
    const instance = await BookInstance.findById(req.params.id).populate('book').exec();
    if (!instance) return res.status(404).json({ message: 'BookInstance not found' });
    res.json(instance);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { book, imprint, status, due_back } = req.body;
    if (!book || !imprint) return res.status(400).json({ message: 'book and imprint are required' });
    const instance = new BookInstance({ book, imprint, status, due_back });
    const saved = await instance.save();
    const populated = await BookInstance.findById(saved._id).populate('book').exec();
    res.status(201).json(populated);
  } catch (err) {
    next(err);
  }
};