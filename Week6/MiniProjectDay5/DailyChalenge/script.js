// Instructions
// Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples
// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false

let arr = [120, 80, 7, 220, 77];
let arr2 = [152, 344, 198, 139, 107];

function isLess(element, index) {
    return element >= 100;
  }
    arr.every(isLess);  
    arr2.every(isLess); 

  console.log(arr.every(isLess))
  console.log(arr2.every(isLess))
