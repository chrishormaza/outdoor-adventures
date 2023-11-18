"use strict";

window.onload = init;

function init(){
    mountainsDropdown();
}

function mountainsDropdown(){
    const elementSelected = document.getElementById("mountainOption");
    elementSelected.onchange = differentMountain;

    for (let mountain of mountainsArray){
        const mountainPicked = document.createElement("option");

        mountainPicked.innerText = mountain.name;
        mountainPicked.value = mountain.name;
        elementSelected.appendChild(mountainPicked);
    }
}

function differentMountain(){
    const elementSelected = document.getElementById("mountainOption");
    const mountainSelected = elementSelected.value;
}
