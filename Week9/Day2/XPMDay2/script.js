let compareToTen = (num) => {
    return new Promise((resolve, reject) => {
        num<=10  
        ?resolve(num<10
        ?`${num} is smaller than 10`
        :`${num} is equal to 10`)

        :reject (`${num} is greater than 10`)
      
    });
}

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

  compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//   Exercise 2 
let biggestNum = 5;

let toCheck = new Promise(function(resolve, reject) {
    setTimeout(() => {
        if(biggestNum >= 4)
        resolve("success");
        reject("Ooops something went wrong");
 }, 4000);
});

toCheck
.then(result => console.log(result))
.catch(error => console.log(error));

// Exercise 3

Promise.resolve(3).then(e=>console.log(e))
Promise.reject("Boo").then(e=>console.log(e)).catch(error=>console.log(error))