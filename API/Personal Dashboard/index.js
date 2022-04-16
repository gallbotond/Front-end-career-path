fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        document.body.style.backgroundImage = `url('${data.urls.full}')`
        document.getElementById('author').textContent = data.user.first_name + ' ' + data.user.last_name
        document.getElementById('location').textContent = data.location.title ? data.location.title : 'somewhere'
    })

fetch('https://quotes.rest/qod')
    .then(res => res.json())
    .then(data => {
        console.log(data.contents.quotes[0].quote)
        document.getElementById('main-quote').textContent = data.contents.quotes[0].quote
    })

const setTime = () => {
    document.getElementById('time').textContent = 
        new Date().getHours() + ':' + 
        new Date().getMinutes() + ':' +
        new Date().getSeconds()
}

setInterval(setTime, 1000)

