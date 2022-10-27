const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const assnBookController = require('../controllers/assnController')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

// 1-> createBook
router.post("/assnCreateBook", assnBookController.assnCrateBook)

// 2-> bookList
router.get("/bookList", assnBookController.bookList)

// 3-> getBooksInYear
router.get("/getBooksInYear", assnBookController.getBooksInYear)

// 4-> getParticularBooks
router.get("/getParticularBooks", assnBookController.getParticularBooks)

//5-> getBooksByPrice
router.get("/getBooksByPrice", assnBookController.getBooksByPrice)

//6-> getRandomBooks
router.get("/getRandomBooks", assnBookController.getRandomBooks) 
module.exports = router;