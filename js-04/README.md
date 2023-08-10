
# JavaScript Exercize no.04

This is the **4th** exercize for practicing JS basics, required as a part of Shiraz University's MERN Stack course.
The exercize consists of 3 tasks as stated below. The JS code of each task is written in an individual *.js file. Then all three JS files are linked to a shared HTML file.

## Task 04-01 (task_04-01.js)

This task required a function to convert any given temperature in 'Degree Celsius' to 'Fahrenheit'. In order to do this, the steps below were taken:
- Getting the desired temperature from the user:
    - `const tempCelsius = +prompt('Enter Temperature (Degree Celsius) To Convert!')`

- Assigning a function, named 'convertToFahrenheit', taking the input '(degCel)' and converting it using the formula '(degCel * 1.8) + 32', and putting it into a new variable 'tempFahrenheit' and then returning it:
    - ```
        function convertToFahrenheit(degCel) {
            const tempFahrenheit = (degCel * 1.8) + 32
            return tempFahrenheit
        }
- Calling the function using 'console.log' and assigning the user's given temperature as the input:
    - `console.log(convertToFahrenheit(tempCelsius))`



## Task 04-02 (task_04-02.js)

The second task required us to take some text and a word from the user and search for the given word in the given text. Then, depending on whether the text contained the word or not, there will be an answer to indicate it.
It was implemented using the 'search()' method, as described in the steps below:

- Getting a text and a word from the user as the inputs and assigning a variable for each:
    - `const userText = prompt('Enter Text To Search!')`
    - `const userWord = prompt('Enter Word To Search For!')`

- Writing a function using 'search()' method and using the 'switch()' method to show whether or not the word existed in the text:
    - ```
        function userSearch(text, word) {
            switch(text.search(word)) {
                case -1: 
                    return "ERR! Not Found!"
                default:
                    return "Word Is Found!"
            }
        }
- Showing the result in console:
    - `console.log(userSearch(userText, userWord))`


## Task 04-03 (task_04-03.js)

The third and final task required defining an object (e.g an online shop product) containing different properties and two methods, to add and remove the item from the shopping cart of the online shop. 
It was implemented using the code below:

- First, defining the shopping cart as an empty 'array' to add/remove products:
    - `const shoppingCart = []`

- Second, defining the 'product' as an object and assiging different values and two methods to it.
    - ```
        const product = {
            name: "Iphone 14 Pro",
            brand: "Apple",
            type: "Smart Phone",
            category: "Phone",
            id: "1234",
            price: "999 $",
            color: "Silver",
            addToCart: function() {
                shoppingCart.push(this)
            },
            removeCart: function() {
                const productIndex = shoppingCart.indexOf(this)
                shoppingCart.splice(productIndex, 1)
            }
        }
        * To add the item to the shopping cart the function was written using the 'array.push()' method.
        * To remove the item from the shopping cart, first we indicated the index of the item in the 'shoppingCart' array and then using the index in the 'array.splice()' method, the item is removed from the shopping cart.


- Calling the functions and showing the resulted array ('shoppingCart') in console:
    - ```
        product.addToCart()
        product.removeCart()

        console.log(shoppingCart)