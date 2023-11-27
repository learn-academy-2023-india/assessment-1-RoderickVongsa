// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
//const fruit1 = "apple"
//const fruit2 = "banana"
// added function compare stringlength to fruit1 & fruit2 to compare
// function compareStringLengths(apple, banana) {
//     const fruit1 = apple.length;
//     const fruit2 = banana.length;
    
//     if (apple === banana) {
//         return "both are equal";
//     } else if (apple > banana) {
//         return '{apple} has more characters than ${banana}.';
//     } else {
//         return '{banana} has more characters than {apple}.';
//     }}
// ended up writing a simple code since I was stuck on how to count each individual characte and compare
//console.log(compareStringLengths("apple", "banana"));

// Pseudo code: Goal is to create a function that will read out "banana" as having more characters
// first goal is to create a if statement, decided to create a function called "fruitbasket"
// was unable to get the instructor example correct



// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code: 
// 

// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
const WorldSeries = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns);
//console.log(WorldSeries.length)
//output: 9
// Expected output: 9

// Pseudo code: Going to combine with .concat to combine both arrays
// added new array "WorldSeries" so that I could add both arrays to it
// hoping to combine both with .concat and hope they work with console.log(.length)
// It took a whole week but it FINALLY WORKED 



// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023"
// added let Reverse = ""
let Reverse = ""
//decided to use a loop 
// used a post-decrement operator `i--`
// used `i >=0` so it would be greater or equal to '0'
for (let i=currentCohort.length - 1; i >=0; i-- ){
// the code read currentCohort = "LEARN 2023" backwards
    Reverse += currentCohort[i];
}

console.log(Reverse)
// attempted to use split for "LEARN 2023" did not work

// Expected output: "3202 NRAEL"

// Pseudo code: My goal is to use .reverse() 
// added console.log wrapping "currentCohort"
// I connect "currentCohort" with .reverse())
// it didn't seem to work so I will be attempting to use .split('')
// ended up creating a new array called "Cohort"
// I tried plugging .reverse but for some reason I kept getting a SyntaxE Error
// went with diferent approach with a loop
// --------------------3) Use a for loop to log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// const oddnum
// added array 
const oddnum = (array) => {
let newArr = []

for (let i = 0; i< array.length; i++){
    if(array[i] % 2 !== 0) {
        newArr.push(array[i])
    }
}
  return newArr
}

//console.log(oddnum(stockExchange))

// Expected output: 13 5 -5 27

// Pseudo code: used "!==" for strict inequality comparison 
// ran into issue with 'undefined' 
//realised I put '<=' on line 87
// used for & let  <= less or equal than
// removed "=" and left < was able to solve 'undefined'