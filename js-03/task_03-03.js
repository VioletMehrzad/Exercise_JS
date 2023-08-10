const userScore_1 = +prompt("Enter Scores!")
const userScore_2 = +prompt("Enter Scores!")
const userScore_3 = +prompt("Enter Scores!")
const userScore_4 = +prompt("Enter Scores!")
const userScore_5 = +prompt("Enter Scores!")

function average(a, b, c, d, e) {
    const sum = a + b + c + d + e
    const avg = sum / 5
    if (!isNaN(sum)) {
        switch (avg) {
            case avg < 12:
                return avg + ' - RESULT: FAILED';
            default:
                return avg + ' - RESULT: PASSED';
        }
    }
    return 'ERR! INVALID NUMBERS!' 
}

const userAverage = average(userScore_1, userScore_2, userScore_3, userScore_4, userScore_5)
console.log(userAverage)