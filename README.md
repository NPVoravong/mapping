# Leaflet Challange

## Prompt
Using [USGS Earthquake Data](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) map the GeoJSON for the past seven days.

## Process
* **_HTML Formating_**  
Before we can do anything with the data all the necessary librarys and files need to be referenced in the `index.html`.  
The following are all needed to have the map function properly:  
- Leaflet CSS and JS
- CSS file to handle the map element and legend
- D3.js to handle the GeoJSON data.
- A reference to the `config.js` file. This file holds the API key for the Mapbox basemaps.
- A reference to the `logic.js` file. Code that determines how the map functions lives here.
- A div to hold the map.
  > `<div id="map"></div>`

* **_Conditional Formating_**  
Once the appropite data is retrieved from the USGS website it needs to be loaded into the 



