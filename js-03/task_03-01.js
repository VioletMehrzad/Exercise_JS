const num1= +prompt("First Number?")
const num2=+prompt("Second Number?")
const operator= prompt("Operator?")

function calculator(x = 0, y = 0, o) {
    if (!isNaN(x + y)) {
        switch (o) {
            case '+':
                return x + y;
            case '-':
                return x - y;
            case '*':
                return x * y;
            case '/':
                return x / y;
            default:
                return 'INVALID OPERATOR!'
        }
    }
    return 'INVALID NUMBER!'
}

console.log(calculator(num1, num2, operator))