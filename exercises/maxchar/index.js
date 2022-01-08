// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {}
    let max = 0
    let maxChar = ''

    for (let char of str){
        if(charMap[char]){
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    for (let char in charMap){
        if(charMap[char] > max){
            max = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}

module.exports = maxChar;


// Gibson - Solution 1
// function maxChar(str) {
//     // convert the string to an object where
//     // the keys are the characters in the string
//     // the values are the number of times that character appears in the string
//     // How? 
//     // turn string to array, use for each helper to check each char
//     // or for of loop
//     const strMap = {}
//     for (const char of str){
//         strMap[char] ? strMap[char]++ : strMap[char] = 1
//     }

//     const keys = Object.keys(strMap)
//     let maxChar = ''

//     for(const key of keys){
//         if(!strMap[maxChar] || strMap[key] > strMap[maxChar]){
//             maxChar = key
//         }
//     }

//     return maxChar
// }


// Grider - Solution 1
// function maxChar(str) {
//     const charMap = {}
//     let max = 0
//     let maxChar = ''

//     for (let char of str){
//         if(charMap[char]){
//             charMap[char]++
//         } else {
//             charMap[char] = 1
//         }
//     }

//     for (let char in charMap){
//         if(charMap[char] > max){
//             max = charMap[char]
//             maxChar = char
//         }
//     }

//     return maxChar
// }
