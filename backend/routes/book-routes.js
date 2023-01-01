const express = require('express');
const routers = express.Router();
const Book = require('../model/Book');
const booksControllers = require('../controllers/books-controller')

routers.get('/', booksControllers.getAllBooks);
routers.post('/', booksControllers.addBook);
routers.get('/:id', booksControllers.getById);
routers.put('/:id', booksControllers.updateBooks);
routers.delete('/:id', booksControllers.deleteBook);

module.exports = routers;