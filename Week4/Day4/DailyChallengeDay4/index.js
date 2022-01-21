
let lessBottles = 1;
let userNumber = parseInt(prompt("Pick a number from 1 to 99, so we can start the countdown"));
let bottle = userNumber === 1 ? "it" : "them";

for (userNumber; userNumber > 0; userNumber -= lessBottles) {
console.log(userNumber, 'bottles of beer on the wall', userNumber,'bottles of beer.');
console.log(userNumber, 'bottles of beer');
console.log('Take', 'down and pass', bottle, 'around,', userNumber, 'bottles of beer on the wall.')
--userNumber;
} if (userNumber === 1) {
    console.log(userNumber, 'bottle of beer on the wall,',  userNumber, 'bottle of beer.');
    console.log('Take', 'down and pass', bottle, 'around,', userNumber, 'bottles of beer on the wall.')
} else {
    console.log('No more bottles of beer on the wall, no more bottles of beer.');
}

