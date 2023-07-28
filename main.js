"use strict";

const displayArea = document.querySelector("main");

function buildGrid(gridSize) {
    for (let i = 0; i < gridSize / 2; i++) {
        let gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");
        displayArea.appendChild(gridRow);
        for (let j = 0; j < gridSize / 2; j++) {
            let gridItem = document.createElement("div");
            gridItem.classList.add("gridItem");
            gridItem.style.height = "10px";
            gridItem.style.width = "10px";
            gridItem.addEventListener("mouseenter", changeColor);
            displayArea.lastElementChild.appendChild(gridItem);
        }
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = "black";
}


buildGrid(32);