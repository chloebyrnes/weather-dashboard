// Vars to enter data for city
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')

// data for weather report
var name = document.querySelector('.name');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var uvindex = document.querySelector('.uvindex');
var apiKey = "6e61d5c7ad393f7fd70107fe83b9f92a";
var searchInput = "";
var city = "";
var currentDate = moment().format("M/D/YYYY");


//event listener
button.addEventListener('click', function() {
  console.log("button was clicked")
  searchInput = $(".inputValue").val().trim();
  getLocation(searchInput);
});



function getLocation(searchInput){


//fetching api
var apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + searchInput + "&limit=1&appid=" + apiKey;
fetch(apiUrl)
  .then(function(response) {
    if(response.ok){
      response.json().then(function(data){
        console.log(data)
        var lattitude = data[0].lat;
        var longitude = data[0].lon;
        city = data[0].name;
        var lattitudeStr = lattitude.toString();
        var longitudeStr = longitude.toString();
        getWeather(lattitudeStr, longitudeStr);
      });
    }
  });
};

  function getWeather(lat, lon){
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&units=imperial&appid=" + apiKey;
    fetch (apiUrl).then(function(response){
      if(response.ok){
        response.json().then(function(data){
          console.log(data)

          var nameElement = $(".name");
          nameElement.text(city.toUpperCase()+ currentDate);
          var tempElement = $(".temp");
          tempElement.text(data.current.temp);
          

        })
      }
    })
  }


   // var nameValue = data['name'];
   // var tempValue = data['temp'];
   // var windValue = data['wind'];
    //var humidityValue = data['humidity']

   // name.innerHTML =nameValue;
   // temp.innerHTML =tempValue;
   // wind.innerHTML =windValue;
   // humidity.innerHTML =humidityValue;

