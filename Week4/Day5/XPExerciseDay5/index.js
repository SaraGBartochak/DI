
// let divNav = document.getElementById('navBar').setAttribute('id', 'socialNetworkNavigation');

// let newLi = document.createElement("li"); 
// let newA = document.createElement("a");
// let menu = document.getElementById("socialNetworkNavigation").getElementsByTagName("ul")[5];
// menu.appendChild(newLi);
// newLi.appendChild(newA);
// newA.setAttribute("href", "#");
// newA.innerHTML = "Login";

// document.getElementById("socialNetworkNavigation").appendChild(newLi);

// console.log(ul.firstElementChild.textContent);

// console.log(ul.lastElementChild.textContent);

// Exercise 2

let firstUl = document.getElementsByTagName("ul");
firstUl[0].getElementsByTagName("li")[1].textContent = "Richard";

let MyName = document.querySelectorAll(".list :first-child");
    MyName.forEach(li => li.textContent = "Sara");

let bothUl = document.querySelectorAll("ul");
bothUl.forEach((item) => {
    let lastLi = document.createElement("li");
    lastLi.textContent = "Hey students";    
    item.appendChild(lastLi);
});
bothUl[1].removeChild(bothUl[1].children[1]);

for (const element of bothUl) {
    element.setAttribute("class", "student_list");
  }

firstUl[0].classList.add("university", "attendance");


// Exercise 3

    let div3 = document.querySelector("#third");

let divBg = 
document.getElementById("").style.backgroundColor = "lightblue";