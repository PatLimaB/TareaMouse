let containerElement = document.querySelector(".container");

// Paletas de colores
let blue = ["#587291", "#2F97C1", "#1CCAD8", "#15E6CD", "#5076A6"];
let pink = ["#D500AA", "#FF47DA", "#FF87AB", "#FCC8C2", "#ED497A"];
let orange = ["#D24C27", "#ED8653", "#EEB559", "#EE6C4D", "#F7A12F"];
let purple = ["#CD8DF5", "#ED53D9", "#9A1DA6", "#BF32DE", "#F72FC5"];

let currentPalette = blue;

function setPalette(newPalette) {
    currentPalette = newPalette;
}

document.getElementById("blueButton").addEventListener("click", function(){
    setPalette(blue);
});

document.getElementById("pinkButton").addEventListener("click", function(){
    setPalette(pink);
});

document.getElementById("orangeButton").addEventListener("click", function(){
    setPalette(orange);
});

document.getElementById("purpleButton").addEventListener("click", function(){
    setPalette(purple);
});

// Función para obtener un índice aleatorio
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

// Función de cambio de color
function changeColor (event) {
    let randomIndex = getRandomIndex(currentPalette.length); // Obtenemos un índice aleatorio
    event.target.style.backgroundColor = currentPalette[randomIndex]; // Cambiar el color a un color aleatorio del array
    setTimeout(() => {
        event.target.style.backgroundColor = "initial"; // Revertimos el color después de 2 segundos
    }, 2000);
}

// Creamos los cuadrados dentro del container
function createSquare () {

    let matrix = [];
    let column = 50;
    let row = 50;

    for (let i=0; i<row; i++){
        matrix[i]=[];
        for (let j=0; j<column; j++){
            matrix[i][j] = document.createElement("div");
            matrix[i][j].classList.add("square"); // Agregamos la clase "square" a cada div creado
            matrix[i][j].addEventListener("mouseover", function(event) {changeColor(event)}); // Pasamos el evento a la función changeColor
            containerElement.appendChild(matrix[i][j]); // Agregamos el div a containerElement
        }
    }
}

createSquare(); // Llamamos a la función para crear la matriz y agregarla al documento
