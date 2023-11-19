"use strict";

window.onload = init;

function init(){
    parksDropdown();
    statesDropdown();
}

function parksDropdown(){
    const parkSelected = document.getElementById("parkTypeOption");
    parkSelected.onchange = differentPark;

    for (let park of parkTypesArray){
        const parkPicked = document.createElement("option");

        parkPicked.innerText = park;
        parkPicked.value = park;
        parkSelected.appendChild(parkPicked);
    }
}

function statesDropdown(){
    const locationSelected = document.getElementById("locationOption");
    locationSelected.onchange = differentState;

    for (let location of locationsArray){
        const locationPicked = document.createElement("option");

        locationPicked.innerText = location;
        locationPicked.value = location;
        locationSelected.appendChild(locationPicked);
    }
}

function differentPark(){
    document.getElementById("parkTypeOption").value;
}

function differentState(){
    const elementSelected = document.getElementById("locationOption");
    const mountainSelected = elementSelected.value;
}