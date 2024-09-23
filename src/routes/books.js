const express = require('express');
const { addBookController, getAllBookController, updateBookController, deleteBookController } = require('../controller/books');
const { userChecker } = require('../middlewares/tokenVerofication');
const router = express.Router()


router.post('/add-book', userChecker, addBookController)
router.get('/get-book', userChecker, getAllBookController)
router.post('/update-book', userChecker, updateBookController)
router.delete('/delete-book/:id', userChecker, deleteBookController)


module.exports = router

