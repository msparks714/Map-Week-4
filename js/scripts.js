
mapboxgl.accessToken = 'pk.eyJ1IjoibXNwYXJrczcxNCIsImEiOiJjazZsZjl0aXAwYmMzM21uMHpmNjcxMzFoIn0.yMKMcXRxt0QzELn7THF_8g';

// we want to return to this point and zoom level after the user interacts
// with the map, so store them in variables
var initialCenterPoint = [-73.9895411, 40.744695]
var initialZoom = 10.67


// create an object to hold the initialization options for a mapboxGL map
var initOptions = {
  container: 'map-container', // put the map in this container
  style: 'mapbox://styles/mapbox/light-v10', // use this basemap
  center: initialCenterPoint, // initial view center
  zoom: initialZoom, // initial view zoom level (0-18)
}

// create the new map
var map = new mapboxgl.Map(initOptions);

// add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// make a single marker in Bryant Park
 new mapboxgl.Marker()
   .setLngLat([-73.9895411, 40.744695])
   .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('I am in Bryant Park'))
   .addTo(map);


   // iterate over each object in studentData
   bathroomData.forEach(function(manuelEntry) {
     // for each object in the studentData, add a marker to the map with a popup
     new mapboxgl.Marker()
       .setLngLat([manuelEntry.longitude, manuelEntry.latitude])
       .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
         .setHTML(`${manuelEntry.name} is a  ${manuelEntry.type_of_place} Here are their hours:
           ${manuelEntry.hours} and their <a target="_blank" href="${manuelEntry.website}"> website. </a>`
         ))
      .addTo(map);
    })


var directions = new MapboxDirections({
  accessToken: 'pk.eyJ1IjoibXNwYXJrczcxNCIsImEiOiJjazZsZjl0aXAwYmMzM21uMHpmNjcxMzFoIn0.yMKMcXRxt0QzELn7THF_8g',
  unit: 'metric',
  profile: 'mapbox/cycling'
});

map.addControl(directions, 'top-left');
