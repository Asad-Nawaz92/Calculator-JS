function calculator(val) {
    document.getElementById('inp').value += val
}

function eq() {
    var equal = document.getElementById('inp')
    equal.value = eval(equal.value)

}

function clrall() {
    document.getElementById('inp').value = ''
}

function clr() {
    var display_val = document.getElementById('inp').value
    document.getElementById('inp').value = display_val.slice(0, -1)
}