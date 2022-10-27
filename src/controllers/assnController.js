const assnBookModel = require('../models/assnModel')

const assnCrateBook = async function(req, res){
    let data = req.body
    let savedData = await assnBookModel.create(data)
    res.send({msg : savedData})
}

const bookList = async function(req, res){
    let getData = await assnBookModel.find().select({bookName : 1, authorName : 1})
    res.send({msg:getData})
}

const getBooksInYear = async function(req, res){
    let getData = await assnBookModel.find({year: 2022})
    res.send({msg:getData})
}

const getParticularBooks = async function(req, res){
    let getData = await assnBookModel.find({$or:[{authorName:"Albert Einstein"}, {year: 1990} ]})
    res.send({msg:getData})
}

const getBooksByPrice = async function(req, res){
    let getData = await assnBookModel.find({$or:[{"price.indianPrice":"100INR"}, 
    {"price.indianPrice":"200INR"}, {"price.indianPrice":"500INR"} ]})

    // ------- OR -----------
    // let getData = await assnBookModel.find({"price.indianPrice" : {$in: ["100INR", "200INR", "500INR"]}})

    res.send({msg:getData})
    // {indianPrice:"100INR"}, {indianPrice:"200INR"}, {indianPrice:"500INR"}
}

const getRandomBooks = async function(req, res){
    let getData = await assnBookModel.find({$or:[{stockAvailable : "true"}, {totalPages: {$gt : 500}}]})
    res.send({msg:getData})
}
module.exports.assnCrateBook = assnCrateBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getBooksByPrice = getBooksByPrice
module.exports.getRandomBooks = getRandomBooks