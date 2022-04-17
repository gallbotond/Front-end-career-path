fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    .then(res => res.ok ? res.json() : Error())
    .then(data => {
        // console.log(data)
        document.body.style.backgroundImage = `url('${data.urls.full}')`
        document.getElementById('author').textContent = data.user.first_name + ' ' + data.user.last_name
        document.getElementById('location').textContent = data.location.title ? data.location.title : 'somewhere'
    })
    .catch(err => {
        console.log(err)
        document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1621051431590-4d2e2e10637e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80')`
        document.getElementById('author').textContent = 'Jael Coon'
        document.getElementById('location').textContent = 'Olympia, WA, USA'
    })

fetch('https://quotes.rest/qod')
    .then(res => res.ok ? res.json() : Error())
    .then(data => {
        // console.log(data.contents.quotes[0])
        document.getElementById('main-quote').textContent = data.contents.quotes[0].quote
        document.getElementById('quote-author').textContent = '- ' + data.contents.quotes[0].author
    })
    .catch(err => console.log(err))

fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Clitecoin&vs_currencies=usd')
    .then(res => res.ok ? res.json() : Error())
    .then(data => {
        // console.log(data)
        let text = ''
        for (const key in data) {
            text += `<p>${key}: ${data[key].usd}$</p>`
        }
        document.getElementById('crypto-info').innerHTML = text
    })
    .catch(err => console.log(err))

const setTime = () => {
    // let m = new Date().getHours() >= 12 ? ' PM' : ' AM'
    document.getElementById('time').textContent = new Date().toLocaleTimeString('en-us', {timeStyle: 'short'})
        // new Date().getHours() + ':' + 
        // new Date().getMinutes() + 
        // m
}

setInterval(setTime, 1000)

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

var latitude, longitude

function success(pos) {
    var crd = pos.coords;
    
    // console.log('Your current position is:');
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&units=metric&appid=d614dee4a1b71743f1b961cf0ebb583f`)
        .then(res => res.ok ? res.json() : Error())
        .then(data => {
            // console.log(data)
            document.getElementById('weather').textContent = `${data.name} ${data.main.temp.toFixed(2)}°C, Air pressure ${data.main.pressure} milibars`
        })
        .catch(err => console.log(err))
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);