
# JavaScript Exercize no.03

This is the **third** exercize for practicing JS basics, required as a part of Shiraz University's MERN Stack course.
The exercize consists of 3 tasks as stated below. The JS code of each task is written in an individual *.js file. Then all three JS files are linked to a shared HTML file.

## Task 03-01 (task_03-01.js)

This task required us to modify the calculator from the previous exercize (js-02) using *'JS functions'*.
The following describes the steps taken to modify the code in VScode:

- Assigning inputs as variables:
    - `const num1= +prompt("First Number?")`
    - `const num2=+prompt("Second Number?")`
    - `const operator= prompt("Operator?")`

- Assigning a function, named 'calculator', taking the inputs (x, y, o) and setting the conditions for each operation using 'switch' function:
    - ```
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
- Calling the function using 'console.log':
    - `console.log(calculator(num1, num2, operator))`



## Task 03-02 (task_03-02.js)

The second task required us to take some text from the user and change its letters to uppercase.
It was implemented using the 'toUpperCase' method, as described in the steps below:

- Getting a text from the user as the input:
    - `const userText = prompt('Please Enter Text In Lowercase Letters!')`

- Writing a function using 'toUpperCase' method:
    - ```
        function textUpperCase(x) {
            return x.toUpperCase()
        }
- Showing the result in console:
    - `console.log(textUpperCase(userText))`


## Task 03-03 (task_03-03.js)

The third and final task required us to take 5 given numbers (e.g. exam scores) from the user and calculate their average. If the resulted average was below 12, show a message, informing the user that they failed.
It was implemented using the code below:

- Getting 5 numbers from the user as the input:
    - ```
        const userScore_1 = +prompt("Enter Scores!")
        const userScore_2 = +prompt("Enter Scores!")
        const userScore_3 = +prompt("Enter Scores!")
        const userScore_4 = +prompt("Enter Scores!")
        const userScore_5 = +prompt("Enter Scores!")
- Making a function to calculate the average of 5 given numbers:
    - ```
        function average(a, b, c, d, e) {
            if (!isNaN(a + b + c + d + e)) {
                return (a + b + c + d + e) / 5
            }
            return 'ERR! INVALID NUMBERS!'
        }
- Calling the function and putting the user's scores as input, then assigning a variable to the result and showing the result in the console:
    - ```
        const userAverage = average(userScore_1, userScore_2, userScore_3, userScore_4, userScore_5)
        console.log(userAverage)
- Assiging a condition to check whether the average is above or below 12 and showing a message accordingly:
    - ```
        if (userAverage >= 12) {
            console.log('Passed!')
        } else {
            console.log('Failed!')
        }
