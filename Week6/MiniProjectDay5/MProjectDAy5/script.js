// Instructions
// Part 1 : Quote Generator
// Create an HTML file, that contains a section (for now the section is empty), and a button “Generate Quote”.

// In the Javascript file, create an array of objects. Each object has 3 keys : id, author and quote. The id must start at 0, and is incremented for every new quote. So the first quote will have the id 0, the second quote the id 1, the third quote the id 3 ect…

// Populate the array with a few quotes that you like.

// When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.
// Important: When clicking on the button, make sure you don’t display the same quote twice in a row.

let arrObj = [
    {id:"zero", author:"Amy Poehler", quote:"Change the world by being yourself."},
    {id:"one", author:"T.S Eliot", quote:"Every moment is a fresh beginning."},
    {id:"two", author:"Mark Twain", quote:"Never regret anything that made you smile."},
    {id:"three", author:"Unknown", quote:"Aspire to inspire before we expire."},
    {id:"four", author:"Pablo Picasso", quote:"Everything you can imagine is real."},
    {id:"five", author:"Leonardo da Vinci", quote:"Simplicity is the ultimate sophistication."},
    {id:"six", author:"Buddha", quote:"What we think, we become."}
]

function arrObj() {
    return arrObj[Math.floor(Math.random()*arrObj.length -1)]
  }