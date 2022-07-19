// Vars to enter data for city
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')

// data for weather report
var name = document.querySelector('.name');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var uvindex = document.querySelector('.uvindex');


//fetching api
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=6e61d5c7ad393f7fd70107fe83b9f92a')
