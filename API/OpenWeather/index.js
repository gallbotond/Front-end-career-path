const time = document.getElementById('time')
const loc = document.getElementById('location')
const weather = document.getElementById('weather')

fetch('https://apis.scrimba.com/openweathermap/data/2.5/weather?q=mures')
    .then(res => res.json())
    .then(data => {
        time.textContent = new Date()
        loc.textContent = data.name
        weather.textContent = `Temperature: ${(data.main.temp - 272.15).toFixed(2)}°C, feels like ${(data.main.feels_like - 272.15).toFixed(2)}°C, air pressure ${data.main.pressure} milibars`
    })