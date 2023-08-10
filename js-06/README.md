
# JavaScript Exercize no.06

The **6th** exercize of JS basics required us to make an array of users, each user containing properties of 'name, age, major and id'. Also, defining functions to add, remove or edit users. It was done following the steps below:

- First, creating a new array:
    - `const userList = [];`

- Then, defining a function named "generateUserObj" to creat an object for each person with properties of name, age, major and a random id. This function will return an object with these four properties and the values assigned to it.
    - ```
        const generateUserObj = (userName, userAge, userMajor) => {
            const name = userName;
            const age = userAge;
            const major = userMajor
            const id = Math.floor(Math.random() * (999999 - 111111 + 1) + 111111);
            return {
                name,
                age,
                major,
                id
            }
        }
    * To generate a random **six** digit number for the id, the Math.floor() and Math.random() methods were used.


- Next step is to define three seperate functions to add, remove and edit users from the array list.
    - **Add Users**: For this function, the array.push() method was used:
        - ```
            const addUser = (userName, userAge, userMajor) => {
                userList.push(generateUserObj(userName, userAge, userMajor))
            }
    - **Remove Users**: To remove users from the array, first we need to find the index of the desired item, using 'findIndex()' method. This method will return the index of the first item that matches the given word (x). Then, using the index of the matching item, the user will be removed from the list by the splice() method: 
        - ```
            const rmvUser = (x) => {
                const userIndex = userList.findIndex(object => {
                    return object.name === x || object.age === x || object.major === x
                });
                if (userIndex !== -1) {
                    userList.splice(userIndex, 1)
                }
            }
    - **Edit Users**: This function will get three inputs; 'x' for the current value of the user that needs to be changed, 'y' for one of the three properties of the user (name, age, major), and 'z' for the new value to change to. Just like the 'rmvUser' function, first we need to find the index of the desired item, using 'findIndex()' method. After finding the index, we should check which property needs to be edited (y), using the switch() case method. According to the given property, the value will be overwritten using 'userList[userIndex].name' and assiging the new value to it (z):
        - ```
            const editUser = (x, y, z) => {
                const userIndex = userList.findIndex(object => {
                    return object.name === x || object.age === x || object.major === x
                });
                if (userIndex !== -1) {
                    switch(y) {
                        case "name":
                            userList[userIndex].name = z
                            break
                        case "age":
                            userList[userIndex].age = z
                            break
                        case "major":
                            userList[userIndex].major = z
                            break
                        default:
                            return "Wrong Property!"
                    }
                }
            }



- Finally, testing each function to see if it works or not and seeing the result in the console:
    - ```
        addUser("Violet Mehrzad", 27, "Architectural Conservation")
        addUser("Jacob Stephenson", 31, "Civil Engineering")
        addUser("Cyrus Buckley", 35, "Electrical Engineering")
        addUser("Ally Shah", 25, "Mathematics")
        addUser("Ali Christian", 37, "Physics")
        addUser("Braiden Brock", 23, "Medicine")

        rmvUser("Ally Shah")
        rmvUser(37)

        editUser("Medicine", "major", 'Pharmacology')
        editUser("Jacob Stephenson", "age", 33)

        console.log(userList)