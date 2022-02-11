

let noSpaces = str => str.replace(/\s/g, '');

function compare (first, second) {
    let check  = noSpaces(first.toLowerCase()).split("").sort().join("");
        toCheck = noSpaces(second.toLowerCase()).split("").sort().join("");
    console.log(check === toCheck
        ? first + " and " + second + " are anagrams!"
        : first + " and " + second + " are not anagrams."
    );
}
console.log(compare('beautiful','Fa Tub Lieu' ));
console.log(compare("Astronomer", "Moon starer") );
console.log(compare("School master", "The classroom") );
console.log(compare("The Morse Code", "Here come dots") );

// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"
