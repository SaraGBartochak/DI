let alertPop = () => {

     alert('Hello from JavaScript')
};

let button = document.querySelector('btn');
button.addEventListener('click', alertPop);

fetch('/')
.then(res => res.json())
.then(data => {
    console.log(data);
    (document.querySelector('div')).textContent = JSON.stringify(data);
})
.catch(e => console.log(e))

