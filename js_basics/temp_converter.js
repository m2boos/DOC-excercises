// var color = prompt("what is your favorite color?")
//
// console.log(name)

// °C  x  9/5 + 32 = °F
//
// (°F  -  32)  x  5/9 = °C

var tempF = parseInt(prompt("What is the temperature in Fahrenheit?"));
var celsius;
celsius = (tempF - 32) * 5/9
kelvin = (tempF + 459.67) * 5/9
console.log("the temp in Celcius is " + celsius);
console.log("the temp in Kelvin is " + kelvin );
