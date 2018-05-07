var date = new Date()

var y = date.getUTCFullYear() - 2000
var m = date.getUTCMonth() + 1
var d = date.getUTCDate()

var divider = (86400 / 255)
var seconds = (date.getUTCHours() * 3600) + (date.getUTCMinutes() * 60) + date.getUTCSeconds()

var i = 1 + Math.floor(seconds / divider)

console.log(y + '.' + m + '.' + d + '000' + i)
