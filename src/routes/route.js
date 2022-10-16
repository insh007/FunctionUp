const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
//importing external package
const underscore = require('underscore')

//importing external package lodash
const lodash = require('lodash')

const val = require('../logger/logger')
const help = require('../util/helper')
const format = require('../validator/formatter')

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    // console.log("Calling my function ",xyz.myFunction())
    // console.log("The value of the constant is ",xyz.myUrl)
    //Trying to use an external package called underscore
    // let myArray = ['Akash', 'Pritesh', 'Sabiha']
    // let result = underscore.first(myArray)
    // console.log("The result of underscores examples api is : ", result)

    //Problem-1 console
    console.log(val.fun())

    //Problem-2 consoles
    console.log("Today's date is:",help.date())
    console.log("Current month is:",help.month())
    console.log(help.batchInfo())
    // res.send('My first ever api!')

    //problem-3 consoles
    console.log("Hardcoded string is:",format.trims())
    console.log("Lowercase string is:",format.lowerCase())
    console.log("Uppercase string is:",format.upperCase())

    //problem-4 
    let monthsArray = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec']
    let monthsArrayresult = lodash.chunk(monthsArray, 3)
    console.log(monthsArrayresult)

    let oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    let oddNumbersResult = lodash.tail(oddNumbers)
    console.log(oddNumbersResult)

    let arr1 = [007, 4, 9, 007, 5]
    let arr2 = [7, 8, 9, 7, 5]
    let arr3 = [10, 8, 9, 66, 5]
    let arr4 = [555, 8, 5, 007, 33]
    let arr5 = [90, 2, 44, 007, 33]
    let uniqueNumbersResult = lodash.union(arr1, arr2, arr3, arr4, arr5)
    console.log(uniqueNumbersResult)

    let keyValueArray = [["horror","The Shining"], ["drama","Titanic"], ["thriller", "Shutter Island"], ["fantasy", "Pans Labyrinth"] ]
    let keyValueArrayResult = lodash.fromPairs(keyValueArray)
    console.log(keyValueArrayResult)


    //To be tried what happens if we send multiple response
    res.send('My second api!')
});

module.exports = router;

