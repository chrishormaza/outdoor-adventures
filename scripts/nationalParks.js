"use strict";

window.onload = init;

function init(){
    parksDropdown();
    statesDropdown();
}

function parksDropdown(){
    const parkTypeOption = document.getElementById("parkTypeOption");
    parkTypeOption.onchange = differentPark;

    for (let parkType of parkTypesArray){
        const parkPicked = document.createElement("option");

        parkPicked.innerText = parkType;
        parkPicked.value = parkType;
        parkTypeOption.appendChild(parkPicked);
    }
}

function statesDropdown(){
    const locationOption = document.getElementById("locationOption");
    locationOption.onchange = differentState;

    for (let location of locationsArray){
        const locationPicked = document.createElement("option");

        locationPicked.innerText = location;
        locationPicked.value = location;
        locationOption.appendChild(locationPicked);
    }
}

let stateSelected = "";
let parkTypeSelected = "";

function differentPark(){
    const parkTypeOption = document.getElementById("parkTypeOption");
    parkTypeSelected = parkTypeOption.value;
    parkDisplay();
}

function differentState(){
    const elementSelected = document.getElementById("locationOption");
    stateSelected = elementSelected.value;
    parkDisplay();
}

function parkDisplay(){
    const displayContainer = document.getElementById("displayContainer");
    displayContainer.replaceChildren();
    let array = nationalParksArray;

    if (parkTypeSelected && stateSelected){
        array = array.filter((nationalPark) =>
            nationalPark.State === stateSelected && nationalPark.LocationName.includes(parkTypeSelected)
        );
    }
    else if (parkTypeSelected){
        array = array.filter((nationalPark) =>
            nationalPark.LocationName.includes(parkTypeSelected)
        );
    }
    else if (stateSelected){
        array = array.filter((nationalPark) =>
        nationalPark.State === stateSelected
        );
    }

    array.forEach((park) => {
        displayContainer.innerHTML += 
        `
        <div class="card" style="width: 28rem;">                               
         
        <div class="card-body text-center">
            <a href="${park.Visit}" target="_blank"><h3 class="card-title text-center">${park.LocationName}</h3></a>
            <p class="card-text">Location ID: ${park.LocationID}</p>
            <p class="card-text"> Located At: </p>
            <p class="card-text">${park.Address}</p>
            <p class="card-text">${park.City}, ${park.State} ${park.ZipCode} </p>
            <p class="card-text">Phone:${park.Phone} | Fax:${park.Fax} </p>
            <p class="card-text">Longitude: ${park.Longitude} | Latitude: ${park.Latitude} </p>

        
        </div>
        </div>
        <div class="pt-md-3"></div>
        `
        displayContainer.appendChild.innerText;
    });
}
