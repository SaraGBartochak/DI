let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift();
fruits.sort();
fruits.push("Kiwi");
console.log(fruits);

fruits.splice(0,1);
console.log(fruits);
['Apples']

fruits.reverse();
console.log(fruits);

// second exercise

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(moreFruits[1][1][0]);