const img = document.querySelector('.image-container')

fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => img.innerHTML = `<img src='${data.message}' alt='dog' />`);