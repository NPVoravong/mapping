# 01-Leaflet Challange

## Prompt
Using [USGS Earthquake Data] (https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) map the GeoJSON for the past seven days.

## Concepts
* **_Conditional Formating_**  
The provided data uses a "state" column to designate one of the following outcomes for the project: Live, Failed, Canceled, and Successful. These words are then used in the formatting rules to apply a color to each cell depending on the state. The “Percent Funded” column that is formatted using a blue-green-red color scale. With projects on the higher end receiving shades of blue and shade of red on the lower end.

<img src="/images/Conditional.png" height="auto">

* **_Pivot Table & Chart_**
<br />In order to make sense of the 4,000 projects in the dataset pivot tables and charts were used to group the data by various categories of interest. For example, one table used a stacked bar chart to look at the state of each project per category. Another table is using a line graph to compare launch date against outcome.

<img src="/images/PivotTable.png" width="auto">

* **_COUNTIFS()_**
<br />The purpose of the COUNTIFS function is to return a number based on a specific criteria. In this case it was used to get the number of projects that either succeeded, failed, or was canceled based on its fundraising goal. The results of the count if function were then used to create a line graph to visualize the returned numbers and percentages.

<img src="/images/CountIF.png" height="auto">

* **_Aggreate Statistics_**
<br />To get a high-level overview of the dataset the mean, median, minimum, maximum, variance, and standard deviation formulas were used to compare successful projects against unsuccessful ones.


