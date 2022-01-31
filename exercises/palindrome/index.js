// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // arr.every()
    // does a boolean assessment on every value in an array
    // arr.every((item, index) => experession )
    // if any expression retunrs false, every returns false
    // if all expression return trure , every returns true

    return str.split('').every((char, index)=> char === str[str.length - index - 1])
    // but this causes extra work
    // we'll compare the first to the last, but then also last to first
    // we're doing double the work 
}

module.exports = palindrome;


// Gibson - Solution 1
// function palindrome(str) {
//     const reversed = str.split('').reduce((rev, char)=>char+rev, '')
//     return str === reversed
// }

// Grider - Solution 1
// function palindrome(str) {
//     const reversed = str.split('').reverse().join('')
//     return str === reversed
// }

// Grider - Solution 2
// function palindrome(str) {
//     // arr.every()
//     // does a boolean assessment on every value in an array
//     // arr.every((item, index) => experession )
//     // if any expression retunrs false, every returns false
//     // if all expression return trure , every returns true

//     return str.split('').every((char, index)=> char === str[str.length - index - 1])
//     // but this causes extra work
//     // we'll compare the first to the last, but then also last to first
//     // we're doing double the work 
// }