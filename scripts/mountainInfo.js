"use strict";

window.onload = init;

function init(){
    mountainsDropdown();
}

//Populates dropdown with mountains
function mountainsDropdown(){
    const mountSelected = document.getElementById("mountainOption");
    mountSelected.onchange = displayMountain;

    for (let mountain of mountainsArray){
        const mountainPicked = document.createElement("option");

        mountainPicked.innerText = mountain.name;
        mountainPicked.value = mountain.name;
        mountSelected.appendChild(mountainPicked);
    }
}

//Sunrise & Sunset API
async function getSunsetForMountain(lat, lng){
    let response = await fetch( `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
       let data = await response.json();
       return data;
    }


//Displays mountain when selected    
function displayMountain(){
    const mountSelected = document.getElementById("mountainOption");
    let mountainSelected = mountSelected.value;

    const mountainCard = document.getElementById("mountainCard");
    mountainCard.style.display = "block";

    const image = document.getElementById("image");
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const effort = document.getElementById("effort");
    const elevation = document.getElementById("elevation");
    const coordsLat = document.getElementById("coordsLat");
    const coordsLng = document.getElementById("coordsLng");

    for (let mountain of mountainsArray){
        if (mountainSelected == mountain.name){
            image.src = `images/mountainImages/${mountain.img}`;
            title.innerText = mountain.name;
            description.innerText = mountain.desc;
            effort.innerText = mountain.effort;
            elevation.innerText = mountain.elevation;
            coordsLat.innerText = mountain.coords.lat;
            coordsLng.innerText = mountain.coords.lng;
                
            getSunsetForMountain(mountain.coords.lat, mountain.coords.lng).then((data) => {
                const sunrise = document.getElementById("sunrise");
                const sunset = document.getElementById("sunset");

                sunrise.innerText = data.results.sunrise;
                sunset.innerText = data.results.sunset;
        });
        }
    }
}
