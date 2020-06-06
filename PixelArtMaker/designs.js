// Select color input
let color = document.getElementById("colorPicker");
// Select size input
let sizePicker = document.getElementById("sizePicker");
let canvas = document.getElementById("pixelCanvas");
let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWidth");

// fill() function to color the selected cell

function fill() {
    this.style.backgroundColor = color.value;
}

// Make grid with a white background & call fill() on the selected cell:

function makeGrid() {
    for (let n=0; n<height.value; n++){
        const row = canvas.insertRow(n);
        for (let m=0; m<width.value; m++){
            const cell = row.insertCell(m);
            cell.style.backgroundColor = "white";
            cell.addEventListener("click", fill);
        }
    }
}

// When size is submitted by the user, call makeGrid()
// Call clearGrid() if size is submitted again

function clearGrid(){
    while(canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}

sizePicker.onsubmit = function(grid){
    grid.preventDefault();
    clearGrid();
    makeGrid();
}