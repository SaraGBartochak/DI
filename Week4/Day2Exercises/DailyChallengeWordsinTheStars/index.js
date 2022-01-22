let userWords = [];

userWords = prompt("Type a sentense separeted with comma");

let separetedWords = userWords.split(",")
    .map(word => word.trim());
console.log(separetedWords);

let longestWord = 0;

separetedWords.forEach((word, index) => {

    longestWord = Math.max(longestWord, word.length)});

let star = ["*".repeat(longestWord + 4)];

    for (let word of separetedWords) {

        star.push(`* ${word + " ".repeat(longestWord - word.length)} *`);
    }
    star.push(star[0]);
    
    console.log(star.join("\n"));


