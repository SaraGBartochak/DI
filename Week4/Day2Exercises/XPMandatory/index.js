// // Part 1

// function infoAboutMe() {
//     name: "Sara";
//     age: 34;
//     hobbies: "crafts",
//     console.log(infoAboutMe);
// }
// infoAboutMe(key, value);

// // Part 2

// function infoAboutPerson(personName, personAge, personFavoriteColor) {
//     console.log("Your name is", personName, "you are", personAge, "years old, your favorite color is", personFavoriteColor)
// }

// infoAboutPerson("David", 45, "blue");
// infoAboutPerson("Josh", 12, "yellow");

// // Exercise 2: Tips

// function calculateTip() {

// let bill = parseInt(prompt("Enter your bill"));
// let tip;

//    if (bill < 50) { 
//        tip = bill * 0.2;
//        console.log(tip)

//    } else if (bill >= 50 && bill <= 200){ 
//     tip = bill * 0.15;
//     console.log(tip)

//    } else if (bill >= 200) {
//        tip = bill * 0.1;
//        console.log(tip)
//    }
//    console.log(bill + tip);
// }
// calculateTip();

// Exercise 3

// function isDivisible(divisor) {
//   let sum = 0;
 
//   for (let index = 0; index <= 500; index++) {
        
//       if (index % divisor === 0) { 
//         sum += index;
//         console.log(sum);
//   }
// }
// }
// isDivisible(23);

// Exercise 4

// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// shoppingList = ["banana", "orange", "apple"];

// function myBill() {

//     let total = 0;
//     for (let i = 0; i < shoppingList.length; i++) {

//         if (stock[shoppingList[i]] > 0) {
//             stock[shoppingList[i]] --;
//             total += prices[shoppingList[i]];
//         }
//     }
//     return total;
// }
// console.log(myBill());

// // Exercise 5

// function changeEnough(itemPrice, amountOfChange){

//     let money = [0.25, 0.1, 0.05, 0.01];
//     let sumOfChange = 0;

//     // money.forEach(i => {
//     //     sumOfChange += amountOfChange[i] * money[i];
//     // });
    
//     for (let i in amountOfChange) {
//         sumOfChange += amountOfChange[i] * money[i];
//     }
//     console.log(sumOfChange);

//     if (sumOfChange >= itemPrice) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(changeEnough(4.25, [25, 20, 5, 0]));

// Exercise 6

function hotelCost(){
    
    let perNight = 140;
    let numberOfNights;
 
    do {
        numberOfNights = parseInt(prompt("How many nights you would like to purchase?"));
    } 
    while (numberOfNights < 0 || Number.isNaN(numberOfNights)) {
        return numberOfNights * perNight;
    }
}
console.log(hotelCost());

let londonDestination = "London";
let parisDestination = "Paris";
let otherDestination = "";
let londonDestinationCost = 183;
let parisDestinationCost = 220;
let otherDestinationsCost = 300;

function planeRideCost(){
    
   let destination = "";
    do {
        destination = prompt("Please, choose a destination");
    }
    while (destination === "" || !/^[a-zA-Z()]*$/.test(destination));
    return getCostByDestination(destination);
}

let getCostByDestination = destination => {

    let cost;

    switch(destination){

        case londonDestination: cost = londonDestinationCost;

            break;

        case parisDestination: cost = parisDestinationCost;

            break;

        default: cost = otherDestinationsCost;
    }

    return cost;
}


planeRideCost();

function rentalCarCost(){

    let carCost = 40;
    let rentDays;
    let discount = 0.05;

    do { 
        rentDays = parseInt(prompt("How many days would you like to rent a car?"));
    }
    while (rentDays === true)
    if (rentDays === "" || !isNaN(rentDays)) {

    } else if (rentDays <= 10) {
        return carCost * rentDays;
    } else {
        return carCost * rentDays * discount;
    }
}
console.log(rentalCarCost());

function totalVacationCost() {

    let hotel = hotelCost();

    let planeRride = planeRideCost();

    let car = rentalCarCost();

    let totalCost = hotel + planeRride + car;

    console.log(`Your hotel cost is: ${hotel}$, destination cost is: ${planeRride}$ and car rental cost is: ${car}$`);
    console.log(`Total cost is: ${totalCost}$`);
}

totalVacationCost();