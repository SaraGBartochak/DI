let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

let displayGroceries = () => console.log(groceries.fruits.forEach(fruit=>console.log(fruit)))

let cloneGroceries = () => {
    let user = client
    client = "Betty"
// no, because is a string and it passes by value.

    let shopping = groceries
    groceries.totalPrice = "35$"
    groceries.payed = false
    // yes because is not primitive, it passes by reference.
}
cloneGroceries()
