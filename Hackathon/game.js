// funtion on the colors box
function allowDrop(event) {
  event.preventDefault();
}
function drop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("img");
  event.target.appendChild(document.getElementById(data));
}

// Event on the images
function drag(event) {
  event.dataTransfer.setData("img", event.target.id);
}

function replay() {
  location.reload();
}
  