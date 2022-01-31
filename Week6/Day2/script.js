// Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file.

// #1 -- answer: will be a = 3, because was reassigned inside of the if statement
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// } 

// //#2 -- answer: the var a = 0
// var a = 0;
// function q2() {
//     a = 5;
// }
// // answer: is a = 0
// function q22() {
//     alert(a);
// }


// //#3 answer: not defined
// function q3() {
//     window.a = "hello";
// }

// // answer: a = 0, because still a var global
// function q32() {
//     alert(a);
// }

// //#4 asnwer: the var = "test" // correct answer var a = 1
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }

// //#5 answer: var = 2 // correct answer var = 5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);

// Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

// winBattle = () => true;

// let experriencePoints = (true) ? 10 : 1;

// console.log(experriencePoints)

// Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
// Check out the example below to see the expected output
// Example:

// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

// let check = "hello";

// let check2 = [1, 2, 4, 0];

// isString = () => (check) ? 'hello' : [1, 2, 4, 0];
// console.log(check);
// console.log(check2);

// Exercise 4 : Colors
// Instructions
// Using this array :

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// let suffix;

// for (let index = 0; index < colors.length; index++) {
//      console.log(index);    
     
//      if (colors.includes("Violet", [6])) {

//         console.log("Yeah");
//     } else { 

//         console.log("No...")
//     }
// }
// switch (index) {

// case 0: "st"
//     break;

// case 1: "nd"
//     break;

// case 2: "rd"
//     break;

// default: "th"
//     break;
// }
// console.log(`${index+1}${suffix} is ${colors}`);

// Exercise 5 : Colors #2
// Instructions
// Using these arrays :

// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

let ordinal = ["th","st","nd","rd"];

let iterator = ordinal.keys();

let iterator2 = ordinal.values();

color.forEach(index => console.log(index));

for (const key of iterator) {
   
    console.log(`${key + 1} choise is ${color}`)
}

for (const value of iterator2) {
    
    console.log(` ${value} choise is ${color}`)
}

// Exercise 6 : Bank Details
// Instructions
// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.
