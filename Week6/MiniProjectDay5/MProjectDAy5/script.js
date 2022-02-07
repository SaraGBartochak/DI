// Instructions
// Part 1 : Quote Generator
// Create an HTML file, that contains a section (for now the section is empty), and a button “Generate Quote”.

// In the Javascript file, create an array of objects. Each object has 3 keys : id, author and quote. The id must start at 0, and is incremented for every new quote. So the first quote will have the id 0, the second quote the id 1, the third quote the id 3 ect…

// Populate the array with a few quotes that you like.

// When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.
// Important: When clicking on the button, make sure you don’t display the same quote twice in a row.

let randomNum;
let currentQuote;
let currentAuthor;
let quotes;

let arrObj = [
    {id:0, author:"Amy Poehler", quote:"Change the world by being yourself."},
    {id:1, author:"T.S Eliot", quote:"Every moment is a fresh beginning."},
    {id:2, author:"Mark Twain", quote:"Never regret anything that made you smile."},
    {id:3, author:"Unknown", quote:"Aspire to inspire before we expire."},
    {id:4, author:"Pablo Picasso", quote:"Everything you can imagine is real."},
    {id:5, author:"Leonardo da Vinci", quote:"Simplicity is the ultimate sophistication."},
    {id:6, author:"Buddha", quote:"What we think, we become."}
]
let randomQuote = () => {
    let newArr = arrObj.map(e=>e.id);
    randomNum = newArr[Math.floor(Math.random() * (newArr.length))]
    console.log(randomNum);
    quotes = arrObj.find(element => {
        return element.id === randomNum
    });

    // console.log(quotes.quote);
}
document.querySelector("#btn").addEventListener("click", randomQuote);
document.querySelector(".whereToShow");

// Part 2 : Add Buttons
// In the HTML file, create a form with the inputs “Quote” and “Author” and a button. So when you click on the button, you can add a new quote to the array of object.
// Important: Don’t forget to set the id of the new quotes

// In the HTML file, under the displayed quote, create a few more buttons:
// A button that gives the number of character inside each quote (space included)
// A button that gives the number of character inside each quote (space NOT included)
// A button that gives the number of words in each quote
// A button “Like” for the user to like a quote. Hint : add a new key to each object that will represent the number of “likes”.


currentQuote = newArr[randomNum].quote;
currentAuthor = newArr[randomNum].author;


const newQuote = document.createTextNode("arrObj");
let quoteAuthor = document.createTextNode("");
newQuote.appendChild(quoteAuthor);

let element = document.querySelector(".whereToShow");
element.appendChild(newQuote);

let createBtn = document.querySelector("#addbtn");
generateBtt.addEventListener('click', );

// Part 3 : Filter Form
// Create a form, that will filter the quotes depending on the name of the author. When the button of the form is clicked, display all the quotes from this specific author.

// Instead of showing all the quotes of the specific author. Show only one quote, and add a button “Previous” and a button “Next” that will display the next or previous quote.