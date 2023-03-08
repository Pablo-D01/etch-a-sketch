// Get the container element using its id
let container = document.getElementsByClassName("container");

function paint(){
  console.log('Najechano na element');
  const targetElement = event.target;
  targetElement.style.backgroundColor = 'black';}

for (let i = 0; i < 256; i++) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "grid-div");

    
    container[0].appendChild(newDiv);
  }
  
  // let gridDiv = document.getElementsByClassName("grid-div");
  // gridDiv.addEventListener('mousedown', (event) => {      
  //   paint();
  // });

let isPainting = false;

const divs = document.querySelectorAll('div.grid-div');

// divs.addEventListener('mousedown', startPainting);
// divs.addEventListener('mouseup', stopPainting);

function startPainting() {
  isPainting = true;
  divs.forEach(div => {
    div.addEventListener('mousemove', paint);
  });
}

function stopPainting() {
  isPainting = false;
  divs.forEach(div => {
    div.removeEventListener('mousemove', paint);
  });
}

divs.forEach(div => {
  div.addEventListener('mousedown',startPainting, (event) => { 
    console.log('mousedown');
    paint();
  });

  div.addEventListener('mouseup',stopPainting, (event) => {  
    console.log('mouseup')   
    paint();
  });
  
});

