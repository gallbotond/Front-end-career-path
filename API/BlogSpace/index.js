let postsArray = []

function renderPosts() {
    let html = ''
    postsArray.map(post => html += `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <hr>
    `)
    main.innerHTML = html
}

const main = document.getElementById('posts')
const form = document.getElementById("new-post-form")

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 5)
        renderPosts()
    })

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const title = document.getElementById("post-title").value
    const content = document.getElementById("post-body").value

    data = {
        "title": title,
        "body": content
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            postsArray.unshift(data)
            renderPosts()
            form.reset()
        })
})