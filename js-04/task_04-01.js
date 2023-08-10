const tempCelsius = +prompt('Enter Temperature (Degree Celsius) To Convert!')

function convertToFahrenheit(degCel) {
    const tempFahrenheit = (degCel * 1.8) + 32
    return tempFahrenheit
}

console.log(convertToFahrenheit(tempCelsius))