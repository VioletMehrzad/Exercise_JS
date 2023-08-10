const userText = prompt('Enter Text To Search!')
const userWord = prompt('Enter Word To Search For!')

function userSearch(text, word) {
    switch(text.search(word)) {
        case -1: 
            return "ERR! Not Found!"
        default:
            return "Word Is Found!"
    }
}

console.log(userSearch(userText, userWord))