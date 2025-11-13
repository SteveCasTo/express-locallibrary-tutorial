const express = require('express');
const router = express.Router();

const authorReal = require('../controllers/authorRealController');
const bookReal = require('../controllers/bookRealController');
const genreReal = require('../controllers/genreRealController');
const bookinstanceReal = require('../controllers/bookinstanceRealController');
const allElements = require('../controllers/allElements');

router.get('/', async (req, res) => {
  res.json({ message: 'API /diferente - rutas disponibles', routes: [
    '/diferente/authors', '/diferente/books', '/diferente/genres', '/diferente/bookinstances', '/diferente/all'
  ]});
});

router.get('/authors', authorReal.list);
router.get('/authors/:id', authorReal.detail);
router.post('/authors', authorReal.create);

router.get('/books', bookReal.list);
router.get('/books/:id', bookReal.detail);
router.post('/books', bookReal.create);

router.get('/genres', genreReal.list);
router.get('/genres/:id', genreReal.detail);
router.post('/genres', genreReal.create);

router.get('/bookinstances', bookinstanceReal.list);
router.get('/bookinstances/:id', bookinstanceReal.detail);
router.post('/bookinstances', bookinstanceReal.create);

router.get('/all', allElements.all);

module.exports = router;