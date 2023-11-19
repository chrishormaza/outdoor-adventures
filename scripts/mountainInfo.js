"use strict";

window.onload = init;

function init(){
    mountainsDropdown();
}

function mountainsDropdown(){
    const mountSelected = document.getElementById("mountainOption");
    mountSelected.onchange = differentMountain;

    for (let mountain of mountainsArray){
        const mountainPicked = document.createElement("option");

        mountainPicked.innerText = mountain.name;
        mountainPicked.value = mountain.name;
        mountSelected.appendChild(mountainPicked);
    }
}

function differentMountain(){
    const mountSelected = document.getElementById("mountainOption");
    let mountainSelected = mountSelected.value;

    for (mountainSelected of mountainsArray){
        
    }
}
