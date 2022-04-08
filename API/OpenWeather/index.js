const time = document.getElementById('time')
const location = document.getElementById('location')
const weather = document.getElementById('weather')

fetch('https://apis.scrimba.com/openweathermap/data/2.5/weather')
    .then(res => res.json())
    .them(data => console.log(data))