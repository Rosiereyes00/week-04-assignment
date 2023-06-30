
// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// A. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!

// WRITE CODE HERE//

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let lastElement = ages[ages.length - 1] - ages[0];
console.log(lastElement);
  


// B. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

// WRITE CODE HERE//
// ages.push(50);
// // let ages = ages[ages.length - 1] - ages[0];
// console.log(ages);
ages.push(50);
let difference = ages[ages.length - 1] - ages[0];
console.log(difference);


// C. Use a loop to iterate through the array and calculate the average age.

// WRITE CODE HERE//

let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let average = sum / ages.length;
console.log(average);


// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// A. Use a loop to iterate through the array and calculate the average number of letters per name.

// // WRITE CODE HERE//

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totallength = 0;
let count = 0;
for (let i = 0; i < names.length; i++) {
    totallength += names[i].length;
    count += 1;
}
let averagelength = totallength / count;
console.log(averagelength);




// B.Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
// // WRITE CODE HERE//
let arraynames = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let concatenatedNames = '';
for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i] + ' ';
}
console.log(concatenatedNames.trim());



// 3. How do you access the last element of any array?
      
    //   To access the last element of our array we use an  (array.length - 1)

// 4.How do you access the first element of any array?

        // to access the first elment of an array we would use our index(0)
        // for example = let firstElement = array[0];

// 5.Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array

// // WRITE CODE HERE//
let arrayNames = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let nameLengths = [];

for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}

console.log(`${nameLengths}.`);

// 6.Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

// // WRITE CODE HERE//
let total = 0;

for(i = 0; i < nameLengths.length; i++){
    total += nameLengths[i];
}
console.log(total);

// 7.Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
 
// // WRITE CODE HERE//
function repeatWord(word, n) {
    console.log(word.repeat(n))
 }
 repeatWord("Hello", 3)

// 8.Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

// WRITE CODE HERE//
function fullName (firstName, lastName) {
    console.log(firstName + " " + lastName);
}
fullName("Rosalia", "Reyes")

// 9.Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

// WRITE CODE HERE//
function numArray (num1) {
    let total = 0;
    for(i = 0; i < num1.length; i++){
        total += num1[i];
}
if ( total > 100) {
    return true;
}else{
    return false;
}
}

// 10.Write a function that takes an array of numbers and returns the average of all the elements in the array.
 
// WRITE CODE HERE//
function averageArray (array) {
    let sum = 0;
    let count = array.length
    for( i = 0; i < count; i++) {
        sum =+ array[i];
    }
    console.log(sum/count);
}


// 11.Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

// WRITE CODE HERE//
function compareArray (arr1,arr2){
    let total = 0;
    let count = arr1.length
    for( i = 0; i < count; i++) {
        total =+ arr1[i];
    }
    let total1 = 0;
    let count1 = arr2.length 
    for( i = 0; i < count; i++) {
        total =+ arr2[i];
    }
    if(total > total1){
        console.log(true)
    }else{
        console.log(false)
    }
}

// 12.Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
// WRITE CODE HERE//
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {
      return true;
    } else {
      return false;
    }
  }
  console.log(willBuyDrink(true, 15));

// 13.Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// WRITE CODE HERE//
// so for this function i used an array of numbers as my input, this function returns all numbers that are even in the array. i created it so we could see all of our even numbers for our calculation
function sumOfEvenNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        sum += numbers[i];
      }
    }
    return sum;
  }
  console.log(sum)


  