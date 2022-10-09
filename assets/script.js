// Current Weather Data = api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// q: The query parameter
// appid: The application id or key
var openKey= 'e629ac90d489be3a662623628b909aaa';
var openAPI= 'https:api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=e629ac90d489be3a662623628b909aaa';
var searchHist= [];
var id;


function Geocoding(userCityInput){
    var geoCodingAPI =`https://api.openweathermap.org/geo/1.0/direct?q=${userCityInput}&appid=${openKey}`;
    fetch(geoCodingAPI)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
        curentWeath(data);
        futureWeath(data);
    });
    function curentWeath(coord) {
        var lat = coord[0].lat.toString();
        var lon = coord[0].lon.toString();
        var currentWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openKey}&units=imperial`;
        fetch(currentWeatherAPI)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                var name= res.name;
                var date=moment().format("M/D/YYYY");
                var temp= res.main.temp;
                var wind= res.wind.speed;
                var humi= res.main.humidity;
                var icon= res.weather[0].icon;
                // build current weather block
                var bit1= $("#currentTitle");
                bit1.text(name+(date));
                var currentIcon=$("#currentIcon");
                var IconCode = icon;
                currentIcon.attr("src", `https://openweathermap.org/img/wn/${IconCode}@2x.png`);
                var currentTemp=$("#currentTemp");
                currentTemp.text("Temp:  " + temp);
                var currentWind=$("#currentWind");
                currentWind.text("Wind: " + wind + " MPH");
                var currentHumi=$("#currentHumi");
                currentHumi.text("Humidity: " + humi + " %");
            });
    }
        // build future weather block
        function futureWeath(coord) {
        var lat = coord[0].lat.toString();
        var lon = coord[0].lon.toString();
        var forecastAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${openKey}&units=imperial`;
            fetch(forecastAPI)
                .then((res)=> res.json())
                .then((res)=>{
                    console.log('2nd');
                    console.log(res);
                    console.log(res.list.length);
                    var foreCastTitle=$("#futureForecastTitle")
                    foreCastTitle.text("5-Day Forecast")
                    //Future Day 1
                    var futureDate = $("#futureDate-0");
                    date = moment().add(1, "d").format("M/D/YYYY");
                    futureDate.text(date);
                    var futureIcon = $("#futureIcon-0");
                    futureIcon.addClass("futureIcon");
                    var futureIconCode = res.list[4].weather[0].icon;
                    futureIcon.attr("src", `https://openweathermap.org/img/wn/${futureIconCode}@2x.png`);
                    var futureHighTemp = $("#futureHightemp-0");
                    futureHighTemp.text("High Temp: " + res.list[0].main.temp_max );
                    var futureMinTemp = $("#futureMinTemp-0");
                    futureMinTemp.text("Mini Temp: " + res.list[0].main.temp_min );
                    var futureHumi = $("#futureHumi-0");
                    futureHumi.text("Humidity: " + res.list[0].main.humidity + "%");
                    var futureWind = $("#futureWind-0");
                    futureWind.text("Wind Speed: " + res.list[0].wind.speed + "MPH");
                    //Future Day 2
                    var futureDate = $("#futureDate-8");
                    date = moment().add(2, "d").format("M/D/YYYY");
                    futureDate.text(date);
                    var futureIcon = $("#futureIcon-8");
                    futureIcon.addClass("futureIcon");
                    var futureIconCode = res.list[12].weather[0].icon;
                    futureIcon.attr("src", `https://openweathermap.org/img/wn/${futureIconCode}@2x.png`);
                    var futureHighTemp = $("#futureHightemp-8");
                    futureHighTemp.text("High Temp: " + res.list[8].main.temp_max );
                    var futureMinTemp = $("#futureMinTemp-8");
                    futureMinTemp.text("Mini Temp: " + res.list[8].main.temp_min );
                    var futureHumi = $("#futureHumi-8");
                    futureHumi.text("Humidity: " + res.list[8].main.humidity + "%");
                    var futureWind = $("#futureWind-8");
                    futureWind.text("Wind Speed: " + res.list[8].wind.speed + "MPH");
                    //Future Day 3
                    var futureDate = $("#futureDate-16");
                    date = moment().add(3, "d").format("M/D/YYYY");
                    futureDate.text(date);
                    var futureIcon = $("#futureIcon-16");
                    futureIcon.addClass("futureIcon");
                    var futureIconCode = res.list[20].weather[0].icon;
                    futureIcon.attr("src", `https://openweathermap.org/img/wn/${futureIconCode}@2x.png`);
                    var futureHighTemp = $("#futureHightemp-16");
                    futureHighTemp.text("High Temp: " + res.list[16].main.temp_max );
                    var futureMinTemp = $("#futureMinTemp-16");
                    futureMinTemp.text("Mini Temp: " + res.list[16].main.temp_min );
                    var futureHumi = $("#futureHumi-16");
                    futureHumi.text("Humidity: " + res.list[16].main.humidity + "%");
                    var futureWind = $("#futureWind-16");
                    futureWind.text("Wind Speed: " + res.list[16].wind.speed + "MPH");
                    //Future Day 4
                    var futureDate = $("#futureDate-24");
                    date = moment().add(4, "d").format("M/D/YYYY");
                    futureDate.text(date);
                    var futureIcon = $("#futureIcon-24");
                    futureIcon.addClass("futureIcon");
                    var futureIconCode = res.list[28].weather[0].icon;
                    futureIcon.attr("src", `https://openweathermap.org/img/wn/${futureIconCode}@2x.png`);
                    var futureHighTemp = $("#futureHightemp-24");
                    futureHighTemp.text("High Temp: " + res.list[24].main.temp_max );
                    var futureMinTemp = $("#futureMinTemp-24");
                    futureMinTemp.text("Mini Temp: " + res.list[24].main.temp_min );
                    var futureHumi = $("#futureHumi-24");
                    futureHumi.text("Humidity: " + res.list[24].main.humidity + "%");
                    var futureWind = $("#futureWind-24");
                    futureWind.text("Wind Speed: " + res.list[24].wind.speed + "MPH");
                    //Future Day 5
                    var futureDate = $("#futureDate-32");
                    date = moment().add(5, "d").format("M/D/YYYY");
                    futureDate.text(date);
                    var futureIcon = $("#futureIcon-32");
                    futureIcon.addClass("futureIcon");
                    var futureIconCode = res.list[36].weather[0].icon;
                    futureIcon.attr("src", `https://openweathermap.org/img/wn/${futureIconCode}@2x.png`);
                    var futureHighTemp = $("#futureHightemp-32");
                    futureHighTemp.text("High Temp: " + res.list[32].main.temp_max );
                    var futureMinTemp = $("#futureMinTemp-32");
                    futureMinTemp.text("Mini Temp: " + res.list[32].main.temp_min );
                    var futureHumi = $("#futureHumi-32");
                    futureHumi.text("Humidity: " + res.list[32].main.humidity + "%");
                    var futureWind = $("#futureWind-32");
                    futureWind.text("Wind Speed: " + res.list[32].wind.speed + "MPH");
                });
            }
searchHistList(userCityInput);
};
var searchHistList = function(userCityInput) {
    $('.past-search:contains("' + userCityInput + '")').remove();

    var searchHistEntry = $("<p>");
    searchHistEntry.addClass("past-search");
    searchHistEntry.text(userCityInput);

    var searchEntryCont = $("<div>");
    searchEntryCont.addClass("lastHistContainer col-sm-12");

    searchEntryCont.append(searchHistEntry);

    var searchHistContEl = $("#searchHistCont");
    searchHistContEl.append(searchEntryCont);

    if (searchHist.length > 0){
        var previousSearchHist = localStorage.getItem("searchHist");
        searchHist = JSON.parse(previousSearchHist);
    }
    searchHist.push(userCityInput);
    localStorage.setItem("searchHist", JSON.stringify(searchHist));

    $("#userCityInput").val("");
};
var loadSearchHistory = function() {
    var savedSearchHist = localStorage.getItem("searchHist");
    if (!savedSearchHist) {
    return false;
    }
    savedSearchHist = JSON.parse(savedSearchHist);
        for (var i = 0; i < savedSearchHist.length; i++) {
        searchHistList(savedSearchHist[i]);
    }
};

$("#Form").on("submit", function() {
    event.preventDefault();
    var userCityInput = $("#userCityInput").val();
    Geocoding(userCityInput);

});
$("#searchHistCont").on("click", "p", function() {
        var lastCityInput = $(this).text();
        searchApi(lastCityInput);
        var lastCityInputClicked = $(this);
        lastCityInputClicked.remove();
});