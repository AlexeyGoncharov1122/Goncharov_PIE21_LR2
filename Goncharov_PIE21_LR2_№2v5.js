alert("Пользователь вводит 3 целых числа. Программа находит количество положительных и количество отрицательных\
       чисел в исходном наборе.");
var positive_numbers = 0;  // Счётчик положительных чисел
var negativ_numbers = 0;   // Счётчик отрицательных чисел
var a = prompt("Введите первое число:", 0);
var b = prompt("Введите второе число:", 0);
var c = prompt("Введите третье число:", 0);
if (a > 0) {
    positive_numbers++;
} else if (a < 0) {
    negativ_numbers++;
}
if (b > 0) {
    positive_numbers++;
} else if (b < 0) {
    negativ_numbers++;
}
if (c > 0) {
    positive_numbers++;
} else if (c < 0) {
    negativ_numbers++;
}
alert("В наборе чисел " + a + ", " + b + ", " + c + " содержится " + positive_numbers + " положительных чисел и "
       + negativ_numbers + " отрицательных чисел.");