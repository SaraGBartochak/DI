let people = ["Greg", "Mary", "Devon", "James"];

let firstElement = people.shift();
console.log();

people.splice([2], 1);
console.log(people);
people.splice([3], 1, "Jason");
console.log(people);

let newName = people.push("Sara");
console.log(people);

console.log(people.indexOf("Mary"));

let newPeople = people.slice([1], [3]);
console.log(newPeople);

console.log(people.indexOf("Foo"));
//is out of the length

let last = people.indexOf([3]);
console.log(last);
//the relationship between the length of the array and the last element of the array is the same number at index position. So it display -1

//Part 2

for (let i = 0; i < people.length; i++) {
    if (i === 3) { break; }
    console.log(people[i])
}

//Exercise 2 

let myFavColors = ["Black", "DarkBlue", "Lilac", "Red Wine"];

 for (let i = 0; i < myFavColors.length; i++) {
    console.log("My", (i+1), "favorite color is", myFavColors[i]);
}

//  myFavColors.forEach(function(myFavColors, i) {
//      console.log("My" + (i +1) + position + "favorite color is" myFavColors)
//  });

// Exercise 3

let number = parseInt(prompt("Type a number"));
console.log(number);

while (number < 10) {
    number = parseInt(prompt("Type a number"))
    console.log(number);
}


// Exercise 4

let building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
}
    console.log(building.numberOfFloors);
    console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);
    console.log(building.numberOfRoomsAndRent["dan"]);

    let sum = building.numberOfRoomsAndRent["david"][1] + building.numberOfRoomsAndRent["sarah"][1];
    console.log(sum);

    if (sum > building.numberOfRoomsAndRent["dan"][1]) {
        console.log("$1200");
    } else {
        console.log("Your rent is the same");
    }

    //Exercise 5

    let family = {
        Mom: "Sara",
        Dad: "William",
        Daughter: "Hannah",
        Son: "Ian"
    }
    for (let [key, value] of Object.entries(family)) {
        console.log(key, value);
    }

    //Exercise 6

    let details = {
        my: 'name',
        is: 'Rudolf',
        the: 'raindeer'
      }

    for (let [key, value] of Object.entries(details)) {
        console.log(key, value);
    }

    //Exercise 7

    let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
    names.sort();
    for (i = 0; i < names.length; i++) {
        console.log(names[i][0]);
    }
