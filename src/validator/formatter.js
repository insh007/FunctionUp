let str = '   functionUp    '
let trims = function trim(){
    return str.trim()
}

let str1 = 'functionUp'
let lowerCase = function changeToLowerCase(){
    return str1.toLowerCase()
}

let upperCase = function changeToUpperCase(){
    return str1.toUpperCase()
}
module.exports.trims = trims
module.exports.lowerCase = lowerCase
module.exports.upperCase = upperCase
