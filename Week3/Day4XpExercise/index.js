//Exercise 1

let x = 7
let y = 3

let answer = prompt("Who is bigger? x=7 or y=3?")

if ( x > y) {
    alert("x is the biggest number");
} else {
    alert("Sorry");
}

//Exercise 2: Chihuahua

let newDog = 'Chihuahua';
console.log(newDog.length);

newDog.toUpperCase();
console.log();

newDog.toLowerCase();
console.log();

if (newDog === "Chihuahua") {
    prompt("I love Chihuahuas, it's my favorite dog breed");
} else {
    prompt("I don't care, I prefer cats")
}

//Exercise 3

let user = prompt("Type any number:");

document.getElementsByName(user).value;

if (user % 2 == 0) {
    prompt('is an even number');
} else { 
    prompt('is a odd number');
}

//Exercise 4

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

switch (users.length) {
    case 0:
    console.log("no one is online");
    break;

case 1:
    console.log(`${users[1]} is online`);
    break;

case 2: 
console.log(`${users[1]} and ${users[2]} are online`);
    break;

default:
    console.log(`${users[1]} , ${users[2]} and more ${users.length} are online`);
    break;
} 