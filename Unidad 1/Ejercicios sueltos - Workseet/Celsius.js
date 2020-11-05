var celsius = parseInt(prompt("Introduzca grados Celcius:"));
var fahrenheit = parseInt(prompt("Introduzca grados Fahrenheit: "));

var celsiusToFahrenheit, fahrenheitToCelcius;

celsiusToFahrenheit = (celsius*9/5)+32;
fahrenheitToCelcius = (fahrenheit - 32)*5/9;

alert(celsius + "ºC son "+ celsiusToFahrenheit + " ºF<br/>");
alert(fahrenheit + "ºF son " + fahrenheitToCelcius + " ºC<br/>");