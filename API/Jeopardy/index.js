const board = document.getElementById('board')

async function getCategories(offset) {
    let res = await fetch(`https://jservice.io/api/categories?count=4&offset=${offset}`)
    let data = await res.json()
    console.log(data)
    return data
}

getCategories().then(categories => {
    board.innerHTML = ''
    categories.map(category => {
        board.innerHTML += `
            <div id='category-title'>${category.title}</div>
            <div id='category-clue'>100$</div>
            <div id='category-clue'>200$</div>
            <div id='category-clue'>300$</div>
            <div id='category-clue'>400$</div>
        `
    })
})