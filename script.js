// Get the container element using its id
var container = document.getElementsByClassName("container");

for (let i = 0; i < 16; i++) {
    var newDiv = document.createElement("div");
    newDiv.textContent = "X";
    container[0].appendChild(newDiv);

  }
  