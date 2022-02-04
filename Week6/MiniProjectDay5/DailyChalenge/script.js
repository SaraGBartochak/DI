// Instructions
// Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples
// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false

function allTruthy(a, b, c) {
    let truthy = 0;
    let falsey = 0;

    if (!!a) {
        truthy++;
    } else { 
        falsey++;
    }
    if (!!b) {
         truthy++;
    } else { 
         falsey++;
    }
    if (!!c) {
        truthy++;
    } else { 
        falsey++;
    }
    if (falsey > truthy) {
        output = true;
    }
    if (falsey > 2) {
        output = false;
    }
    return output;
}
console.log(allTruthy(true, null, undefined));
console.log(allTruthy(false, '', '0'));
console.log(allTruthy(false, 0, '0'));
 