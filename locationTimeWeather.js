var locations = [
    {
        name: "Nairobi",
        postalCode: "P.O BOX 100 Moi Avenue",
        time: "0100hrs",
        weather: "cloudy"
    },
    {
        name: "Kitale",
        postalCode: "P.O BOX 2001 Kenyatta Street",
        time: "0100hrs",
        weather: "sunny"
    },
    {
        name: "Mombasa",
        postalCode: "P.O BOX 1001 Mombasa",
        time: "0100hrs",
        weather: "windy"
    }
];
var logTimeWeather = locations.forEach(function (location) {
    console.log("weather " + location.weather + " " + location.name + " " + location.postalCode + " " + location.time);
});
console.log(logTimeWeather);
