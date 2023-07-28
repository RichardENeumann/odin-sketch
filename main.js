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
            displayArea.lastElementChild.appendChild(gridItem);
        }
    }

}

buildGrid(16);