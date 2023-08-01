"use strict";

const displayArea = document.querySelector("main");

function enterGridSize () {
    let userEntry = prompt("What size (up to 96) should the grid be?", 16);

    if (userEntry > 96 || userEntry < 1 || Number.isNaN(userEntry)) userEntry = 16;
    while (displayArea.lastElementChild) displayArea.removeChild(displayArea.lastElementChild);
    
    buildGrid(+userEntry);
}

function buildGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let gridRow = document.createElement("div");
        
        gridRow.classList.add("gridRow");
        
        displayArea.appendChild(gridRow);
        
        for (let j = 0; j < gridSize; j++) {
            let gridItem = document.createElement("div");
        
                gridItem.classList.add("gridItem");
                gridItem.style.width = (displayArea.clientWidth / gridSize) + "px";
                gridItem.style.height = (displayArea.clientHeight / gridSize) + "px";
                gridItem.addEventListener("mouseenter", changeColor);
        
                displayArea.lastElementChild.appendChild(gridItem);
        }
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = "black";
}

buildGrid(16);