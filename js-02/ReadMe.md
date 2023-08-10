
# JavaScript Exercize no.02

This is the second exercize for practicing JS basics, required as a part of Shiraz University's MERN Stack course.
The exercize required us to create a simple calculator, capable of doing the 4 main math operations (addition, subtraction, multiplication and division).
The following describes the steps taken to write the code in VScode:

- Defining the inputs:
    - Number 01
    - Operator (+-*/)
    - Number 02

- Assigning each input as a variable:
    - `const num1= +prompt("First Number?")`
    - `const operator= prompt("Operator?")`
    - `const num2=+prompt("Second Number?")`

- Defining the conditions for each operation:
    - `if (operator === "+") {console.log(num1 + num2)}`
    - `if (operator === "-") {console.log(num1 - num2)}`
    - `if (operator === "*") {console.log(num1 * num2)}`
    - `if (operator === "/") {console.log(num1 / num2)}`

- Defining the conditions for possible errors:
    - `if (isNaN(num1) || isNaN(num2)) {console.log("ERR! INPUT IS NOT A NUMBER!")}`

    - `if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {console.log("ERR! OPERATOR NOT DEFINED!")}`
