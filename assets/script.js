// Current Weather Data = api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// q: The query parameter
// appid: The application id or key

var openKey= 'e629ac90d489be3a662623628b909aaa'
var openAPI= 'https:api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=e629ac90d489be3a662623628b909aaa'
var hist= [];
var lat;
var lon;
var id;

function searchApi(userCityInput) {
    var GeocodingApi = (`https:api.openweathermap.org/data/2.5/weather?q=${userCityInput}&appid=${openKey}&units=imperial`);
    fetch(GeocodingApi)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            lon= res.coord.lon;
            lat= res.coord.lat;
            id= res.id;
            console.log("lat: " + lat, "Lon: " + lon,  'id ' + id);
            function bwApi(){
                var bwUrl= 'https:api.openweathermap.org/data/2.5/forecast?lat=' + lat +'&lon=' + lon + '&appid=' + openKey + '&cnt=1';
                fetch(bwUrl)
                    .then((res)=> res.json())
                    .then((res)=>{console.log(res);
                    // var uvIndex= res[0].value;
                    //     console.log(uvIndex);
                        function forcast() {
                            var forcastUrl= 'https:api.openweathermap.org/data/2.5/forecast?id=' + id + '&appid=' + openKey ;
                            fetch(forcastUrl)
                                .then((res)=> res.json())
                                .then((res)=> {
                                    console.log(res.list.slice(0,5));
                                    });
                        } 
                        forcast();  
                    });
            }
            bwApi();
        });
    }

    var searchHistoryList = function(userCityInput) {
        $('.past-search:contains("' + userCityInput + '")').remove();
        var searchHistoryEntry = $("<p>");
        searchHistoryEntry.addClass("past-search");
        searchHistoryEntry.text(userCityInput);
        var searchEntryContainer = $("<div>");
        searchEntryContainer.addClass("lastHistContainer");
        searchEntryContainer.append(searchHistoryEntry);
        var searchHistoryContainerEl = $("#histCon");
        searchHistoryContainerEl.append(searchEntryContainer);
        if (savedSearches.length > 0){
            var previousSavedSearches = localStorage.getItem("savedSearches");
            savedSearches = JSON.parse(previousSavedSearches);
        }
        savedSearches.push(userCityInput);
        localStorage.setItem("savedSearches", JSON.stringify(savedSearches));
        $("#userCityInput").val("");
    };
    
    var loadSearchHistory = function() {
        var savedSearchHistory = localStorage.getItem("savedSearches");
        if (!savedSearchHistory) {
            return false;
        }
        savedSearchHistory = JSON.parse(savedSearchHistory);
        for (var i = 0; i < savedSearchHistory.length; i++) {
            searchHistoryList(savedSearchHistory[i]);
        }
    };

$("#form").on("submit", function() {
    event.preventDefault();
    var userCityInput = $("#userCityInput").val();
    currentWeatherSection(userCityInput);
    fiveDayForecastSection(userCityInput);
});

$("#histCon").on("click", "p", function() {
    var lastCityInput = $(this).text();
    currentWeatherSection(lastCityInput);
    fiveDayForecastSection(lastCityInput);
    var lastCityInputClicked = $(this);
    lastCityInputClicked.remove();
});