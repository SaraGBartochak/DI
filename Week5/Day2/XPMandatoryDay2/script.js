let h1 = document.querySelector("h1");
console.log(h1);

let lastP = document.querySelector("article :last-child");
console.log(lastP);
lastP.remove()

let changeH2 = document.querySelector("h2");
changeH2.addEventListener("click", function () {
    changeH2.style.backgroundColor = "red";
})

let hideH3 = document.querySelector("h3");
    hideH3.addEventListener("click", function (e){
    e.target.style.display = "none";
    })

let buttonBold = document.createElement("button");
buttonBold.textContent = "Make it Bold"
buttonBold.addEventListener("click", allPsToBold);
document.body.appendChild(buttonBold);
    
function allPsToBold(){
    for (p of document.querySelectorAll('p')){
        p.setAttribute("style", "font-weight: bold;")
     }
}
document.getElementsByTagName("h1")[0].addEventListener("mouseover",function() {
    document.getElementsByTagName("h1")[0]
    .setAttribute("style", `font-size: ${Math.floor(Math.random() * 101)}px;`);
});

// let onHover = document.querySelector("h1");
// console.log(h1);
// onHover.addEventListener("mouseover", function(){
//     document.getElementsByTagName("h1").setAttribute(`font-size: ${Math.floor(Math.random() * 101)}px;`);
// })


// Exercise 2 Form

let retrieve = document.querySelector("form");
console.log(retrieve);

let nameInput = [...document.querySelectorAll("label")];
console.log(nameInput);
nameInput.push(document.getElementById("fname"));
nameInput.push(document.getElementById("lname"));
console.log(nameInput[0], nameInput[1]);

let userAnswer = document.getElementById("submit").addEventListener("click", function () {
    
})