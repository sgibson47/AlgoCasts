// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz')
        } else if (divByThree = i % 3 === 0){
            console.log('fizz')
        } else if (divByThree = i % 5 === 0){
            console.log('buzz') 
        } else {
            console.log(i)
        }
    }
}

module.exports = fizzBuzz;

// Gibson - Solution 1
// function fizzBuzz(n) {
//     for(let i = 1; i < n+1; i++){
//         const divByThree = i % 3 == 0
//         const divByFive = i % 5 == 0
        
//         if(divByThree && !divByFive){
//             console.log('fizz')
//         } else if (!divByThree && divByFive){
//             console.log('buzz')
//         } else if (divByThree && divByFive){
//             console.log('fizzbuzz')
//         } else {
//             console.log(i)
//         }
//     }
// }

// Grider - Solution 1
// function fizzBuzz(n) {
//     for(let i = 1; i <= n; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log('fizzbuzz')
//         } else if (divByThree = i % 3 === 0){
//             console.log('fizz')
//         } else if (divByThree = i % 5 === 0){
//             console.log('buzz') 
//         } else {
//             console.log(i)
//         }
//     }
// }