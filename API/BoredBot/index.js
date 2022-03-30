const activity = document.querySelector('.activity')
const button = document.getElementById('btn')
const body = document.body
const main = document.getElementById('container')

fetch('https://apis.scrimba.com/bored/api/activity')
  .then(res => res.json())
  .then(data => {
    activity.textContent = data.activity
  })

function randomColors() {
  let val = Math.floor(Math.random() * 355)
  let color = `hsl(${val}, 100%, `
  let lighter = color + '80%)'
  color += '50%)'

  return [color, lighter, val >= 30 && val <= 70]
}

button.addEventListener('click', function() {
  let [color, lighter, dark] = randomColors()

  fetch('https://apis.scrimba.com/bored/api/activity')
  .then(res => res.json())
  .then(data => {
    activity.textContent = data.activity

    body.style.background = lighter
    activity.style.color = color
    button.style.color = !dark ? 'white' : 'black'
    button.style.background = !dark ? color : lighter
    main.style.background = !dark ? 'white' : 'rgb(120, 120, 120)'
  })
})