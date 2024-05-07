"use strict";

let coord = [40.6434143,-74.0731592]

let zoom = 15;

let mymap = L.map('themap');

mymap.setView( coord, zoom );

let mytiles = L.tileLayer(
  'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }
);


mytiles.addTo(mymap);

let mymarker = L.marker( coord );

mymarker.addTo(mymap);

let mypopup = mymarker.bindPopup('Ferry Terminal');

let marker2 = L.marker( [40.6445471,-74.077072]);


marker2.addTo(mymap);

let popup2 = marker2.bindPopup('Police Station');

let marker3 = L.marker( [40.6499, -74.06662])

marker3.addTo(mymap)

let popup3 = marker3.bindPopup('A Boat')

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent( e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);

let myshape = L.polygon(
  [
    [ 40.70247, -74.015698],
    [40.68517, -74.022746],
    [40.6434143,-74.0731592],
    [40.698316, -74.040796]
    
  ]
);


myshape.addTo(mymap);


myshape.bindPopup('Ferry Range Area');








