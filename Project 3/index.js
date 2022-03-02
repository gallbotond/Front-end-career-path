const list = document.querySelector("#link-list")
const input = document.querySelector("#text-input")

let items = []
let listItems = []

function add() {
    items.push(input.value)
    listItems += "<li>" + items[items.length - 1] + "</li>"
    list.innerHTML = listItems
    input.value = ""
}

