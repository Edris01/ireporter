"use strict"
// this is known as a method because an 
function initMap(){
    map = new google.maps.map(document.getElementById("map"), {
        center: {lat: -34.397, lng: 158.644},
        zoom: 8
    });
};