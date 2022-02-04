// Exercise 1 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

let sum = (a, b) => a + b;
console.log(sum(10)(20));

// Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

 var kgToG = function convertGrams (kilogram) {
return kilogram*1000;
}
console.log(kilogram(1));

function kgToG (kg) {
    return kilogram*1000;
}



// Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function (numChildren, partnerName, geoLocation, jobTitle){
    alert(`You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.`);
})("3", "Lily","New York", "Teacher");

// Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

(function (userName) {

    let newDiv = document.createElement(`div`);

    let greet = document.createTextNode(`Welcome ${userName}`);
    newDiv.appendChild(greet);
    newDiv.appendChild();

})();
console.log(John);


// Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

function makeJuice (size) {
    let ingredients = [];

    let addIngredients = (ingredient1, ingredient2, ingredient3) {

       let txt = ` The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}".`;

        document.querySelector(`.whereToWrite`).textContent = txt
    ingredients.push("Apple");
    ingredients.push("Mango");
    ingredients.push("Banana");
    }


}