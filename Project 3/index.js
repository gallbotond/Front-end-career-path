const list = document.querySelector("#link-list")
const input = document.querySelector("#text-input")
const add = document.querySelector("#add-btn")
const save = document.querySelector("#tab-btn")
const del = document.querySelector("#delete-btn")

let items = []
let itemsFromLS = JSON.parse( localStorage.getItem("myLeads"))
// items = JSON.parse(items)
// items.push("www.google3.com")
// items = JSON.stringify(items)
// items.push()

if(itemsFromLS) {
    items = itemsFromLS
    render(items)
}

// async function getCurrentTab() {
//     let queryOptions = { active: true, currentWindow: true };
//     let [tab] = await chrome.tabs.query(queryOptions);
//     return tab;
// }

function render(array) {
    let listItems = ""
    array.map(item => item ? listItems += `<li><a target='_blank' href='${item}'>${item}</a></li>` : "")
    list.innerHTML = listItems
}

save.addEventListener("click", function() {

    // console.log(getCurrentTab())
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        items.push(tabs[0].url)
        localStorage.setItem("links", JSON.stringify(items))
        render(items)
    })
})

del.addEventListener("dblclick", () => {
    // console.log("Double click!")
    localStorage.clear()
    items = []
    render(items)
})

add.addEventListener("click", () => {
    if(!input.value.trim() == '') items.push(input.value)
    input.value = ""

    localStorage.setItem("links", JSON.stringify(items))

    render(items)

    console.log(itemsFromLS)
})

