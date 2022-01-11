let foods = ["Pizza", "Chocolate","Hambuger","Banana"];
let favMeal = ["Break-Fast", "Lunch", "Dinner"];
console.log('I eat', foods[3], 'at every', favMeal[0]);

let watchedSeries = ["black mirror", "money heist", "the big bang theory"];
let watchedSeriesLenght = ["0", "1", "2"];
let myWatchedSeries = 'black mirror, money heist, and the big bang theory';

console.log('I watched', watchedSeries.length, 'series', myWatchedSeries);

let last = watchedSeries.pop()
console.log(watchedSeries);

let newLength = watchedSeries.push('friends')
console.log(watchedSeries)

let newLength = watchedSeries.push('Game of Thrones');
console.log(watchedSeries);

let newLength = watchedSeries.unshift('Mr. Robot');
console.log(watchedSeries);

let watchedSeries = ['Mr. Robot', 'black mirror', 'money heist', 'friends', 'Game of Thrones']
watchedSeries.splice(1, 1);

console.log(watchedSeries);

/*celsius to fahrenheit*/

let celsius = 35;

let fahrenheit = ((9/5) * celsius) + 32;
console.log(fahrenheit);

/*prediction*/

let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction:
    // Actual: 55 , because 34+21 is 55

    let a = 2;
    let b = 21;
    console.log(a+b);
    
    /*actual prediction 23, because 2+21 is 23*/

    /*value of c = undifined*/

    console.log(3 + 4 + '5');

    /*outcome 75 , because 3+4 is 7 and '5' is a string.*/

    /*Guess answers#2*/
    typeof(15)
// Prediction:is a number, because doesn't have any '' or ""
// Actual: number

typeof(5.5)
// Prediction:is a number as well. even it has a . on it.

// Actual: number

typeof(NaN)
// Prediction:Number, that's the "symbol" used to identify numbers.
// Actual: Number

typeof("hello")
// Prediction:is a string, because is in between ""
// Actual: string

typeof(true)
// Prediction:Boolean, is a statement. false or true.
// Actual:Boolean

typeof(1 != 2)
// Prediction:is true. Because they are different
// Actual: boolean

"hamburger" + "s"
// Prediction:string, both are in "". hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction:hamburgerss
// Actual: NaN

"1" + "3"
// Prediction:is a string, so it will be 13
// Actual: 13

"1" - "3"
// Prediction:NaN, is a string and cannot be subtracted.
// Actual: NaN

"johnny" + 5
// Prediction:johnny5 , because we have a string and a number together.
// Actual: johnny5

"johnny" - 5
// Prediction:NaN, because we have a string and therefore is not possible to subtract even that we have a number as well.
// Actual: NaN

99 * "hello"
// Prediction:NaN, because we have a string and therefore is not possible to multiply even that we have a number as well.
// Actual: NaN

1 != 1
// Prediction:false, boolean. they are the same.
// Actual:false

1 == "1"
// Prediction:false. boolean. one is a string and the other is a number.
// Actual: true

1 === "1"
// Prediction:True. boolean for comaparison
// Actual: false

//Exercice#6

5 + "34"
// Prediction:534, because is a string and a number
// Actual:534

5 - "4"
// Prediction:NaN 
// Actual: 1

10 % 5
// Prediction:will calculate the %
// Actual:0

5 % 10
// Prediction:0 
// Actual:5

"Java" + "Script"
// Prediction: string, javascript
// Actual: javascript

" " + " "
// Prediction: string
// Actual: ''

" " + 0
// Prediction:""0
// Actual:'0'

true + true
// Prediction:boolean, true
// Actual:2

true + false
// Prediction:1
// Actual:1

false + true
// Prediction:1
// Actual:

false - true
// Prediction:1
// Actual:1

!true
// Prediction: false
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction:NaN
// Actual: NaN