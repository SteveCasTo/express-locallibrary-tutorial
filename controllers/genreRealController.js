const Genre = require("../models/genre");

exports.list = async (req, res, next) => {
  try {
    const genres = await Genre.find().exec();
    res.json(genres);
  } catch (err) {
    next(err);
  }
};

exports.detail = async (req, res, next) => {
  try {
    const genre = await Genre.findById(req.params.id).exec();
    if (!genre) return res.status(404).json({ message: 'Genre not found' });
    res.json(genre);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: 'name is required' });
    const genre = new Genre({ name });
    const saved = await genre.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};