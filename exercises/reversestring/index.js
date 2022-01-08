// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = ''
    for (let character of str){
        debugger
        reversed = character + reversed
    }
    return reversed
}

// to use debugger, need to manually call function
// not just export as we do here 
reverse('abc')
// now if we run this file we'll pause on the debugger
// navigate to reversestring dir
// node inspect index.js

// then c | cont | continue to play 

// to inspect a variables
// repl
// variables or code snippets at that point in the process

// Debugger

module.exports = reverse;

// SAM - SOLUTION 1
// function reverse(str) {
//     let reveredStr = ''

//     for(let i=0; i <= str.length-1; i++){
//         // i = 0  and then increments + 1 each loop
//         // you want how many loops?  however may letters there are in str 
//         // well we can access letters of the string like items in an array, str[0]
//         // in which case we want to access str[0] through stg[str.length() - 1]
//         reveredStr += str[str.length-(i+1)]
//     }
//     return reveredStr
// }

// SAM - SOLUTION 2
// function reverse(str) {
//     let reveredStr = ''

//     for(let i=1; i <= str.length; i++){
//         reveredStr += str[str.length-i]
//     }
//     return reveredStr
// }

// Grider - SOLUTION 1
// function reverse(str) {
//     // str.toArray() does NOT exist
//     // split(str [,limit])
//     //     returns an array of strings 
//     //     each string in the array is a piece of the string split is calle on at whatever value was passed in as split's first argument
//     const arr = str.split('')
//     arr.reverse()
//     // const arrToString = arr.toString()
//     // oh jeez, arr.toString() preserves the commas separating the values in the array
//     // [ 'd', 'c', 'b', 'a' ] ==> "d,c,b,a" how dumb
//     // const arrJoined = arr.join()
//     // hrm arr.join() does the same thing . . .
//     // also needs an empty string as first arg
//     // const arrJoined = arr.join('')
//     return arr.join('')
// }

// Grider - SOLUTION 1a
// function reverse(str) {
//     return str.split('').reverse().join('')
// }

// Grider - Solution 2
// function reverse(str) {
//     // Create an empty string caller 'reversed'
//     // for each character in the string,
//         // take the character & add it to the start of 'reversed'
//     // retrun the variable called 'reversed'
//     let reversed = ''
//     // REC: Avoid classic for loop
//     // for(let i = 0; i < str.length; i++){

//     // }
//     for (let character of str){
//         // for each item in an iterable stored in the stemp variable 'str',
//         // store the value in a temp variable 'character'
//         reversed = character + reversed
//         // take the item & add it to the front of reversed
//     }
//     return reversed
// }

// Grider - Solution 3
// function reverse(str) {
//     // turn string into an array via split
//     // use reduce helper
//     // arr.reduce()
//     //      used to take the values in an array and condense them down to one value
//     //      takes in 2 arguments
//     //          1 - an arrow function
//     //          2 - a starting value
//     //      takes the starter value, passes it into the callback as its first argument
//     //      whatever gets returned from the callback is the value passed into it as its first argument in the next run
//     //      the callback runs once for each item in the array
//     //      the callback's second argument is the item from the array

//     return str.split('').reduce((reversed, character)=>{
//         return character + reversed
//     }, '')
// }

// Grider - Solution 3a
// function reverse(str) {
//     return str.split('').reduce((rev, char)=> char + rev, '')
// }