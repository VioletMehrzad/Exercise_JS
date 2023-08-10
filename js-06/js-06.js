const userList = []

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

const addUser = (userName, userAge, userMajor) => {
    userList.push(generateUserObj(userName, userAge, userMajor))
}

const rmvUser = (x) => {
    const userIndex = userList.findIndex(object => {
        return object.name === x || object.age === x || object.major === x
    });
    if (userIndex !== -1) {
        userList.splice(userIndex, 1)
    }
}

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

