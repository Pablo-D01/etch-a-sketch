// Get the container element using its id
var container = document.getElementsByClassName("container");

for (let i = 0; i < 256; i++) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "grid-div");
    container[0].appendChild(newDiv);

  }
  
