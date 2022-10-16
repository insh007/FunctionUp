let date = function printDate() {
    let d = new Date()
    return d.getDate()
}

let month = function printMonth() {
    let m = new Date()
    return m.getMonth() + 1
}

let batchInfo = function getbatchInfo() {
    return "Lithium, W4D5, the topic for today is Nodejs module system"
}
module.exports.date = date
module.exports.month = month
module.exports.batchInfo = batchInfo

