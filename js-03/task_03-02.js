const userText = prompt('Please Enter Text In Lowercase Letters!')

function textUpperCase(x) {
    if (!x) {
        throw Error("Text Is Required!")
    }
    return x.toUpperCase()
}

console.log(textUpperCase(userText))