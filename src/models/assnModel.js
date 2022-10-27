const mongoose = require('mongoose')

const assnBookSchema = new mongoose.Schema({
    bookName : {
        type : String,
        required : true
    },
    authorName : String,
    price : {
        indianPrice : String,
        europePrice : String
    },
    year : {
        type : Number,
        default : 2021
    },
    tags : {
        type: String,
        enum: ["Quantum", "Physics", "Psychology", "Programming", "Fiction", "Mathematics", "Biography"]
    },
    totalPages : Number,
    stockAvailable : Boolean
}, {timestamps : true});

module.exports = mongoose.model('Assnbooks', assnBookSchema)

