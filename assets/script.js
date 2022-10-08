// fetch('https://maps.googleapis.com/maps/api/staticmap?center')
// .then((response) => response.json())
// .then((data) => console.log(data));

var openKey= 'e629ac90d489be3a662623628b909aaa'
var openAPI= 'https:api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=e629ac90d489be3a662623628b909aaa'
var lat;
var lon;
var id;

function searchApi(userCityInput) {
    var GeocodingApi = (`https:api.openweathermap.org/data/2.5/weather?q=${userCityInput}&appid=${openKey}`);
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
                            var forcastUrl= 'https:api.openweathermap.org/data/2.5/forecast?id=' + id + '&appid=' + openKey;
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
    document.getElementById("searchBtn").addEventListener("click", function(){
        var userCityInput = document.getElementById("UserInput").value
        var location = searchApi(userCityInput)
        console.log(location)
        })

    // fetch("http://api.openweathermap.org/geo/1.0/direct?q=Shakopee&limit=5&appid==e629ac90d489be3a662623628b909aaa",{
    //     method: 'GET',
    //     credentials: 'same-origin',
    //     redirect: 'follow',
    //     })
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (data) {
    //         console.log(data);
    //     });


    // fetch("https:api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=e629ac90d489be3a662623628b909aaa",{
        //     method: 'GET',
        //     credentials: 'same-origin',
        //     redirect: 'follow',
        //     })
        //     .then(function (response) {
        //         return response.json();
        //     })
        //     .then(function (data) {
        //         console.log(data);
        //     });