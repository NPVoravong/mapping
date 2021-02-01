const usgsData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

d3.json(usgsData).then(createEqMap);

function createEqMap(data) {
    let eqLayer = createEqLayer(data.features);
    createMap(eqLayer);
};

function createEqLayer(eqData) {
    let earthquakes = L.geoJSON(eqData, {
        onEachFeature: onEachFeature,
        pointToLayer: pointToLayer,
    });

    function pointToLayer(feature, latlng){
        let geojsonMarkerOptions = {
            radius: getRadius(feature.properties.mag),
            fillColor: getColor(feature.properties.mag),
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.75,
          };
          return L.circleMarker(latlng, geojsonMarkerOptions);
    };

    function onEachFeature(feature, layer){
        layer.bindPopup(
            "<h3>" + feature.properties.place + "</h3><hr><p>" + new Date(feature.properties.time) + "</p>" + 
            "<p>" + "Magnitude:" + feature.properties.mag + "</p>"  
          );
    };
    return earthquakes;
};

function getColor(d) {
  return d > 5  ? '#ec3f20' :
         d > 4  ? '#d6776f' :
         d > 3   ? '#ba9c9f' :
         d > 2   ? '#a1bcb4' :
         d > 1   ? '#93d8ae' :
                    '#93f28d';
}

function getRadius(d) {
  return d > 5  ? 36 :
         d > 4  ? 30 :
         d > 3   ? 24 :
         d > 2   ? 16 :
         d > 1   ? 10 :
                    4;
}

function createMap(earthquakes) {
let streetMap = L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      tileSize: 512,
      maxZoom: 18,
      zoomOffset: -1,
      id: "mapbox/streets-v11",
      accessToken: API_KEY,
    }
  );
 
  let outdoorsMap = L.tileLayer(
    "https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "outdoors-v11",
      accessToken: API_KEY,
    }
  );
  let satelliteMap = L.tileLayer(
    "https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "satellite-streets-v11",
      accessToken: API_KEY,
    }
  );
  let lightMap = L.tileLayer(
    "https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "light-v10",
      accessToken: API_KEY,
    }
  );

  let baseMaps = {
    "Light Map": lightMap,
    "Outdoors Map": outdoorsMap,
    "Satellite Map": satelliteMap,
    "Street Map": streetMap,
  };

  let mapLayers = {
      Earthquake: earthquakes,
  };

  let eqMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5,
    layers: [outdoorsMap, earthquakes],
  });

  L.control
    .layers(baseMaps, mapLayers, {
      collapsed: false,
    })
    .addTo(eqMap);

    var legend = L.control({position: 'bottomright'});

    legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 1, 2, 3, 4, 5],
        labels = [];
      
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
    };

    legend.addTo(eqMap);
};

