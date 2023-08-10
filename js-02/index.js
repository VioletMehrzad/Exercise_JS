const num1= +prompt("First Number?")
const operator= prompt("Operator?")
const num2=+prompt("Second Number?")


if (operator === "+") {
    console.log(num1 + num2)
}

if (operator === "-") {
    console.log(num1 - num2)
}

if (operator === "*") {
    console.log(num1 * num2)
}

if (operator === "/") {
    console.log(num1 / num2)
}

if (isNaN(num1) || isNaN(num2)) {
    console.log("ERR! INPUT IS NOT A NUMBER!")
}

if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
    console.log("ERR! OPERATOR NOT DEFINED!")
}