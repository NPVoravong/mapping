# Leaflet Challange

## Prompt
Using [USGS Earthquake Data](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) map the GeoJSON for the past seven days.

## Process
* **_HTML Setup_**  
Before we can do anything with the data all the necessary librarys and files need to be referenced in the `index.html`.  
The following are all required to have the map function properly:  
  - Leaflet CSS and JS
  - A CSS file [`style.css`] to handle the size of the map element
    ```
       #map, body, html 
       {height: 100%;} 
    ```
  - D3.js to handle the GeoJSON data.
  - A reference to `config.js`. This file holds the API key for the Mapbox basemaps.
  - A reference to `logic.js`. This file will determines how the map functions.
  - A div to hold the map.
    > `<div id="map"></div>`
    
* **_Basemaps_** 
 





