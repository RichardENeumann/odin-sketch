"use strict";

const displayArea = document.querySelector("main");

function buildGrid(gridSize) {
    for (let i = 0; i < gridSize / 2; i++) {
        let gridItem = document.createElement("div");
        gridItem.classList.add("gridRow");
        gridItem.textContent = "lol";
        displayArea.appendChild(gridItem);
    }

}

buildGrid(16);