const counterElement = document.getElementById('number')
const savedValues = document.getElementById('prev-values')

let count = 0
let first = true
savedValues.textContent = 'none'

function increase() {
    count += 1
    counterElement.textContent = count
}

function save() {
    if (first) savedValues.textContent = ''
    savedValues.textContent += (!first ? ' - ' : '') + count
    count = 0
    first = false
}

function reset() {
    counterElement.textContent = '0'
    count = 0
}

function del() {
    savedValues.textContent = 'none'
    first = true
}