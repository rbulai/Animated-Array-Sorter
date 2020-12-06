// https://yujia1.github.io/arraySortVisualization/

// Buttons

const generateArrayButton = document.querySelector("#generate-array");
const sizeSlider = document.querySelector("#array-size");
const speedSlider = document.querySelector("#sorting-speed");
const stopButton = document.querySelector("#stop");

let arraySize = sizeSlider.value;

// Array creation

let divSizes = [];
let divs = [];
let margin = 0.1;

const arrayBox = document.querySelector("#array-box");

generateArrayButton.addEventListener("click", generateArray());
sizeSlider.addEventListener("input", updateArray());
// stopButton.addEventListener("click", stopSorting());

function generateArray() {
    arrayBox.innerHTML = "";

    for (let i = 0; i < arraySize; i++) {
        // Creates divs with a randomly generated height
        divSizes[i] = Math.floor(Math.random() * 0.5 * (sizeSlider.max - sizeSlider.min)) + 10;

        divs[i] = document.createElement("div");

        arrayBox.appendChild(divs[i]);

        margin = 0.1;

        divs[i].style = "height: " + divSizes[i] + "%; width: " + (100 / arraySize - (2 * margin)) + "%; margin: " + margin + "%; background-color: #800020;";
    }
}

function updateArray() {
    arraySize = sizeSlider.value;

    generateArray();
}

window.onload = updateArray();