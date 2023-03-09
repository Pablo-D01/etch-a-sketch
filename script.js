  //wygenerowanie określonej liczby div

let container = document.getElementsByClassName("container");

for (let i = 0; i < 256; i++) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "grid-div");

    
    container[0].appendChild(newDiv);
  }
  

  // malowanie poprzez zmiane koloru div
  //łapiemy wszystkie divy
  const divs = document.querySelectorAll('div.grid-div');

  //dodajemy im event listenery na wciśniecie myszy i puszczenie
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
let colorPicker  = document.getElementById('color-picker');

//przy każdej zmianie value pobieramy nowy kolor
let color = '#000000' ;

colorPicker .addEventListener('input', () => {
  const colorValue = colorPicker.value;
  console.log('Wybrany kolor to:', colorValue);
  color = colorValue;
});

