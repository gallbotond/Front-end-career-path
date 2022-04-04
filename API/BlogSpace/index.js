const main = document.getElementById('posts')

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(res => res.json())
    .then(data => {
        let html = ''
        data.slice(0, 5).map(post => html += `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <hr>
        `)
        main.innerHTML = html
    })

