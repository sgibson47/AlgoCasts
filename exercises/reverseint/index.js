// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('')
    return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;

// Gibson - Solution 1
// function reverseInt(n) {
//     const str = n.toString()
//     let negativeIfNecessary = ''
//     if(str[0] === '-'){
//         negativeIfNecessary ='-'
//     }
//     const revStr = str.split('').reverse().join('')
//     const strToMakeNumber =  negativeIfNecessary + revStr
//     return Number.parseInt(strToMakeNumber)
// }

// Gibson - Solution 2
// function reverseInt(n) {
//     const str = n.toString()
//     let negativeIfNecessary = Math.sign(n) == -1 ? '-' : ''
//          Math.sign()
//              returns 0 for 0, 1 for positve numbers, and -1 for negative numbers
//     const strToMakeNumber =  negativeIfNecessary + str.split('').reverse().join('')
//     return Number.parseInt(strToMakeNumber)
// }

// Gibson - Solution 3 
// function reverseInt(n) {
//     const revStr = n.toString().split('').reverse().join('')
//     const revInt = parseInt(revStr)
//     return Math.sign(n) == -1 ? revInt * -1 : revInt
// }

// Grider - Soution 1
// function reverseInt(n) {
//     const reversed = n.toString().split('').reverse().join('')
//     return parseInt(reversed) * Math.sign(n)
// }