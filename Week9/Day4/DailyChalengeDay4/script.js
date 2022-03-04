// 1st Challenge
// Instructions
// Implement a simple version of Promise.all.
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// Example

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

// expected output: Array [3, 42, "foo"]

let arrValues = Promise.all([promise1, promise2, promise3])
.then(result => {
  console.log(result);
})
.catch(error => {
  console.log(error)
});

// let arrValues = async newArrP => {

//     try{

//         let arrToreturn = await Promise.all(newArrP);

//         console.log(arrToreturn)

//     }catch(error){

//         console.log(error);

//     }
// }

// arrValues([promise1, promise2, promise3]);

// 2nd Challenge
// Instructions
// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

// In the HTML file, create a form with 6 inputs:
// name of the first city, its latitude and its longitude
// name of the second city, its latitude and its longitude.

// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()
