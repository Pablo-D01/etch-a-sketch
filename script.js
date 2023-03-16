  //wygenerowanie określonej liczby div

let container = document.getElementsByClassName("container");


let gridCounter = 16;
let divCounter = gridCounter ** 2 ;
let divSize = 400 / gridCounter ;

function divSizeCalculations(){
    divCounter = gridCounter ** 2 ;
    divSize = 400 / gridCounter ;

    console.log("divcounter:",divCounter,"divSize:",divSize)
}

  function generateDivs(){
      for (let i = 0; i < divCounter; i++) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute("class", "grid-div");
        container[0].appendChild(newDiv);

    }
    console.log(divCounter, "DIVS GENERATED :D");

    const divContainer = document.querySelector('.container');
    divContainer.style.gridTemplateColumns = `repeat(${gridCounter}, 1fr)`;
    divContainer.style.gridTemplateRows = `repeat(${gridCounter}, 1fr)`;
  }
  generateDivs()
  

  
  

  // malowanie poprzez zmiane koloru div
  //łapiemy wszystkie divy
  

  //dodajemy im event listenery na wciśniecie myszy i puszczenie
  function addStylesToDivs(){
    divs = document.querySelectorAll('div.grid-div');
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

    console.log('divs are working now')
  }
  addStylesToDivs()

  

//jeżeli mysz jest wcisnieta to isPainting = true -> ruch myszą = paint()
  let isPainting = false;

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


  //zamiana kolorów tła
  function paint(){
    console.log('Najechano na element');
    const targetElement = event.target;
    targetElement.style.backgroundColor = `${color}`;}









//zmiana kolorów wszystkich div na biały
function reset(){
  divs.forEach(div => {
    div.style.backgroundColor = 'white';}
)}


// śledzenie zmian koloru
let colorPicker = document.getElementById('color-picker');

//przy każdej zmianie value pobieramy nowy kolor
let color = '#000000' ;

colorPicker .addEventListener('input', () => {
  const colorValue = colorPicker.value;
  console.log('Wybrany kolor to:', colorValue);
  color = colorValue;
});


// input
let slider = document.getElementById("slider");
let sizeValue = document.getElementById("sizeValue");


// Dodaj nasłuchiwanie zdarzeń zmiany wartości dla slidera
slider .addEventListener("input", () => {
  const parent = document.querySelector('.container');
  const value = slider.value;
  sizeValue.textContent =`${value} x ${value}` ;

  gridCounter = slider.value;
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  console.log('1');
  divSizeCalculations()
  generateDivs()
  addStylesToDivs()
  
});

//GUMKA

function eraser() { color = 'white';  }

