// 1rst Daily Challenge
// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.
const makeAllCaps = upperCase => {

    return new Promise((resolve, reject) => {

        if( upperCase.every(element => typeof element === "string")){

            resolve(upperCase.map( str => str.toUpperCase()));

        } else {

            reject("No string found")
        }
    });
};

let sortWords = mixed => {

    return new Promise((resolve, reject)=> {
        if(mixed.length > 4) {
            resolve(mixed.sort());
        }else {
            reject("The length is smaller than 4")
        }
    }
    )};

    //in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
.then((arr) => sortWords(arr))
.then((result) => console.log(result))
.catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
.then((arr) => sortWords(arr))
.then((result) => console.log(result))
.catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
.then((arr) => sortWords(arr))
.then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
.catch(error => console.log(error))


// 2nd Daily Challenge
// Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

  let toJs = morseJS => {
      return new Promise((resolve, reject) => {

         if(morseJS === "") {
            reject("Is empty")
         }else {
            resolve(JSON.parse(morse));
         }
      }
      )};

//The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object

// const toArray = (morseObj, inputArr) => inputArr.map( inputChar => morseObj[inputChar]);

// function toMorse(morseJS) {

//         morseJS = morseObj => {
    
//         return new Promise((resolve, reject) => {
    
//         let userInput = prompt("Please write a word or a sentence");
    
//         let strToArrNoSpaces = (userInput.split("")).filter(function(entry) { 
//          return entry.trim() != '' });
    
//         if (userInput != morseJS)

//             reject("It doesn't exist in the morse");
    
//         } else { 
        
//                 resolve(toArray(morseObj, strToArrNoSpaces));
           
//         }
//         };
//     };



// 4. The third function called joinWords(morseTranslation), takes one argument: the morse translation array * this function joins the morse translation by using line break and display it on the page (ie. On the DOM)


let joinWords = morseTranslation => {

   let appended = document.querySelector('wheretoappend') 

   morseTranslation.forEach(element => {
       let p = document.createElement('p');
       p.textContent = element;
       appended.appendChild(p)
   });

}

toJs(morse)
    // .then((res) => toMorse(res))
    .then((res) => joinWords(res))
    .catch((res) => console.log(res))
