let page = window.location.href; 

try { 

let tostringify = (Object.fromEntries(page.split("?")[1].split("&").map(array=>array.split("="))))

let jsoned = JSON.stringify(tostringify)

console.log(jsoned)
document.getElementById("wrap").textContent = jsoned

} catch (error) { 
    null
}