const objList = [];

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const generateObj = () => {
    const randomNum = Math.floor(Math.random() * 1000000);
    const char = ['a', 'b', 'c', 'd', 'e', 'f']
    const randomWord = char[Math.floor(Math.random() * 6)] + char[Math.floor(Math.random() * 6)] + char[Math.floor(Math.random() * 6)] + char[Math.floor(Math.random() * 6)] + char[Math.floor(Math.random() * 6)] + char[Math.floor(Math.random() * 6)];
    const randomDate = getRndInteger(0, 1691514611048);
    return {
        randomNum,
        randomWord,
        date: new Date(randomDate)
    }
}


const generateArrayItem = () => {
    objList.push(generateObj())
}

generateArrayItem()
generateArrayItem()
generateArrayItem()
generateArrayItem()
generateArrayItem()
generateArrayItem()

console.log(objList)