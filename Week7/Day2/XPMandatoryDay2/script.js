// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// the result will be result = ['bread',"carrots", "potato", 'chicken', "apple", "orange"];

// ------2------
// will be ["U","S","A"]
const country = "USA";
console.log([...country]);

// ------Bonus------
// will be [",",","] -- correct undifined
let newArray = [...[,,]];
console.log(newArray);

// Exercise 2 : Employees
// Instructions
// Using this array:
//1.Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradle“Hello Chloe” ect…)

    let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
                { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
                { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
                { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
                { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
                { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
                { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

    let sayHello

    let greeting = () => {
        sayHello = users.map(e=>console.log(`Hello ${e.firstName}`))
    }
      greeting();
// 2.Using the filter() method, create a new array, containing only the Full Stack Residents.
// Bonus : Chain the filter method with a map method, to congratulate the Full Stack Residents (ie. “Good job Bradley”, “Good Job Chloe” ect…)

let FStack = users.filter(e => e.role === "Full Stack Stack");
console.log(FStack)

// bonus
users.filter(e => e.role === "Full Stack Resident" ).map( FStack => console.log(`Good Job ${FStack.firstName}`));


// Exercise 3 : Star Wars
// Instructions
// Using this array let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// 1. Use the reduce() method to combine all of these into a single string.

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
    console.log(epic.reduce((prev, curr) => prev + " " + curr , ""));


// Exercise 4 : Employees #2
// Instructions
// Using this object:

// Using the filter() method, create a new array, containing the students that passed the course.
    
let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

let passed = student.filter(e => e.isPassed === true);
    console.log(passed)

// Bonus : Chain the filter method with a map method, to congratulate the students with their name andcourse name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marcoyou passed the course in Robotics” ect…)
    
(student.filter(e => e.isPassed )).map( passed => console.log(`Good Job ${passed.name}, you passed the course in ${passed.course}`));