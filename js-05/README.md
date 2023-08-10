
# JavaScript Exercize no.05

The **5th** exercize of JS basics required us to write a function that pushes an object with a random number, word and date to an array. It was done following the steps below:

- First, creating a new array:
    - `const objList = [];`

- Then, defining a function named "generateObj" to creat an object with a random number, word and date.
    - ```
        const generateObj = () => {
            const randomNum = Math.floor(Math.random() * 1000000);
            const char = ['a', 'b', 'c', 'd', 'e', 'f']
            const randomWord = char[Math.floor(Math.random() * 6)] + char[Math.floor(Math.random() * 6)] + char[Math.floor(Math.random() * 6)] + char[Math.floor(Math.random() * 6)] + char[Math.floor(Math.random() * 6)] + char[Math.floor(Math.random() * 6)];
            const randomDate = getRndInteger(0, 1691514611048);
            // Math.floor(Math.random() * 10000000000000);
            return {
                randomNum,
                randomWord,
                date: new Date(randomDate)
            }
        }
- To generate a random number, the Math.floor() and Math.random() methods was used. Multiplying the given number by 1000000, will generate **six** digit numbers.
- To generate a random word, first a list of the characters were needed, so they were assigned as an array (in this example consisting of 6 characters). The 'Math.floor(Math.random() * 6)', will generate numbers between 0 and 5, which will be used as the index to get the items from "char" array. Combining six of these statements will produce a six-letter word.
- For generating a random date, the below function was used. 
    - This function will generate a random number between min and max:
        - ```
            const getRndInteger = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1) ) + min;`
            }
    - The function is then used to generate a number between 0 and the current "Date.now()" which was "1691514611048".


- Next step is to define another function to push an object to the array "objList":
    - ```
        const generateArrayItem = () => {
            objList.push(generateObj())
        }

- Finally, calling the "generateArrayItem()" function will produce objects with random number, word and date and push it to the "objList" based on how many times it's called. The result is shown in console using the code below:
    - ```
        generateArrayItem()
        generateArrayItem()
        generateArrayItem()
        generateArrayItem()
        generateArrayItem()
        generateArrayItem()

        console.log(objList)