# Leaflet Challenge

## Prompt
Using [USGS Earthquake Data](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) map the GeoJSON for the past seven days.

## Process
* **_HTML Setup_**  
Before we can do anything with the data all the necessary libraries and files need to be referenced in the `index.html`.  
The following are all required to have the map function properly:  
  - Leaflet CSS and JS
  - A CSS file [`style.css`] to handle the size of the map element
    ```
       #map, body, html 
       {height: 100%;} 
    ```
  - D3.js to handle the GeoJSON data.
  - A reference to `config.js`. This file holds the API key for the Mapbox basemaps.
  - A reference to `logic.js`. This file will determine how the map functions.
  - A div to hold the map.
    ```
    <div id="map"></div>
    ```
    
* **_Basemaps_**  
The basemaps used in this project are provided by calling the [Mapbox Styles API](https://docs.mapbox.com/api/maps/styles/). The basemaps are added to the map element 
using leaflets `L.titleLayer()` function. To change between various base layers a control is added to the map using the `L.control()` function. This function references
an array that holds all of the options for base layers.  

* **_Data Wrangling_**  
Once the appropriate data







