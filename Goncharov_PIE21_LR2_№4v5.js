alert("Программа вычисляет значение функции y=f(x) при произвольных значениях x, вводимых пользователем.\
       Система уравнений следующая:\n\
       y = 2*cos(a*x^2-b)^2  при  x = -2,\n\
       y = 3*x^2+b при x = 4,\n\
       y = sgrt(x^2 + e^(a*x)) при x = 3,\n\
       где а = 3.9, b = 4.6");
const a = 3.9;
const b = 4.6;
var y;
var x = Number(prompt("Введите значение х:", 0));
switch(x) {
    case -2:
        y = 2*Math.cos(a*x**2 - b)**2;
        break;
    case 4:
        y = 3*x**2 + b;
        break;
    case 3:
        y = Math.sqrt(x**2 + Math.E**(a*x));
        break;
    default:
        y = "не определён";
        break;
}
if (typeof(y) == "number") {
    y = Math.round(y * 100) / 100;
}
alert("При x = " + x + " функция y = f(x) принимает значение: " + y + ".");