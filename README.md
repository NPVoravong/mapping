# Earthquake Epicenter Mapping

# Prompt
Using [USGS Earthquake Data](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) map the GeoJSON for the past seven days. Use different color and circles sizes to represent the magnitude of the earthquake.

# Dependencies
  * Leaflet
  * HTML
  * Javascript
  * D3.js

# Process
1. HTML Setup 


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
    
2. Data Wrangling


    Once the appropriate data is retrieved from the USGS website it can be feed to the map using `d3.json().then()` The addition of the then function makes it so that the data
is loaded before the next step happens. In this is case it is the function being called is the one that creates the map.
    ```
    d3.json(usgsData).then(createEqMap);
    ```
<img src="/images/GeoJson-Data-Example.png" height="auto">

3. Basemaps


    The basemaps used in this project are provided by calling the [Mapbox Styles API](https://docs.mapbox.com/api/maps/styles/). The basemaps are added to the map element using leaflets `L.titleLayer()` function. To change between various base layers a control is added to the map using the `L.control()` function. This function references an array that holds all of the options for base layers.  

4. Creating the Map


    - Map Defaults  
      The default settings for the map are handled using the `L.map()` function. This is where you reference the div holding the map id and set other parameters such as starting center point, zoom level, and the default data that shows on load.
    - Data Layers  
      Leaflet has its own method for handling GeoJSON data using `L.geoJSON()`. In order to access the feature data `feature` needs to be passed through `L.geoJSON()`. To draw the points on the map these two functions are used.
    - OnEachFeature  
      To make the map more interactive the `OnEachFeature()` function is used to handle click events for the circle generated by `pointToLayer`. Metadata about place, date, and    magnitude from the GeoJSON is combined with HTML code to dynamically generate the text inside the popups that appear when circles are clicked. The feature data is attached to    points using the `.bindPopup()` function.
    - pointToLayer  
    `pointToLayer()` is a function provided by leaflet. It uses latitude and longitude from the GeoJSON feature data to draw the points on the map. The function also allows for    styling to be added to points. To generate the size and color of the circles two different functions are used `getColor()` and `getRadius`. Based upon the magnitude value a      radius and color is assigned to the point. `feature.properties.mag` is passed through those functions to get the styling. Opacity is added so that we can see circles that may    be under another circle. Finally, this data is passed through the `L.circleMaker()` function to add it to the map. Once the layer is created it can be toggled by adding a mapLayers object to the `L.control`.  
   - Legend  
      Leaflet has functions available that can manipulate the Dom. This is how we generate the legend. Using a For Loop with some HTML, an array with all the magnitude levels is paired with the assigned color as determined by `getColor()`. Once the position is specified ```L.control({position: 'bottomright'})``` it can be added to the map. The legend and info classes are set up in the CSS to style the box around the legend text.
   
# Results
Once everything is passed through the mapping function you get the following:

<img src="/images/final-map.png" height="auto">

The live map can be found here [USGS Earthquake Map](https://npvoravong.github.io/mapping/)
