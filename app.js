let key = document.querySelector(".keys");
let display = document.querySelector(".display");
let operator = ["+", "-", "*", "/", "%", "."]

let filter = x => {

    let current = display.innerText;
    let lastChar = current[current.length - 1];

    if (current == "0") {
        if (x != ".") {
            clearLast()
        }
    }

    if (operator.includes(x)) {
        if (operator.includes(lastChar)) {
            return false;
        }
    }

    return true;
}

let showInDisplay = x => {
    if (filter(x)) {
        display.innerText += x
    }
}
let calc = _ => display.innerText = eval(display.innerText);

let clearAll = _ => display.innerText = "";
let clearLast = _ => display.innerText = display.innerText.substring(0, display.innerText.length - 1)