const express = require('express');
const router = express.Router();
const {
  createBook,
  getAllBooks,
  getBookById,
  deleteBook,
  updateBook,
  filterBook,
  sortBooks,
} = require('../controllers/bookController');

/**
 * POST /
 * add a new book
 */

router.post('/', createBook);

/**
 * GET /filter
 * filter books
 */
router.get('/filter', filterBook);

/**
 * GET /
 * sort books
 */
router.get('/sort', sortBooks);

/**
 * GET /
 * get all the books
 */
router.get('/', getAllBooks);

/**
 * GET /:id
 * get a books
 */
router.get('/:id', getBookById);

/**
 * DELETE /:id
 * delete a book
 */
router.delete('/:id', deleteBook);

/**
 * PUT /:id
 * update a book
 */
router.put('/:id', updateBook);

module.exports = router;
