'use strict';
//Task 1
//Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе;
//1 – если первое больше, чем второе; и 0 – если числа равны.

// function cool(number1, number2) {

//     if (number1 < number2) {
//         return -1;
//     }
//     if (number1 > number2) {
//         return 1;
//     }
//     if (number1 == number2) {
//         return 0;
//     }
//     alert('not a number')

// }
// let number1 = Number(prompt('enter 1 number'));
// let number2 = Number(prompt('enter 2 number'));
// let result = cool(number1, number2);
// alert(result);

//Task 2
//Написать функцию, которая вычисляет факториал переданного ей числа

// function factorial(n) {
//     let fact = 1;
//     if (i == 0) return fact;
//     for (let i = 1; i <= n; i++) {
//         fact *= i;
//     }
//     return fact;
// }
// let a = factorial(10);
// alert(a);

// return (n != 1) ? n * factorial(n - 1) : 1;

// let n = Number(prompt('enter 1 number'));
// let result = factorial(n);
// alert(result);

//Task 3
//Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

// function numString(a, b, c) {
//     let result = '' + a + b + c;
//     return result;
// }

// let string = numString(12, 8, 9);
// console.log(string);


/* Task 4
Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата. */

/* function shapeArea(a, b) {

    if (b == undefined & a) {
        return a * a;
    } else if (a && b) {
        return a * b
    } else return 'enter number'
}

let result = shapeArea();
console.log(result);

 */

//Task 5
//Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

/* function perfectNumber(a) {
    let sum = 0;

    for (let i = 1; i < a; i++) {

        if (a % i == 0) {
            sum += i;
        }
    }
    if (sum === a) {
        return `${a} is a perfect number`;
    } else {
        return `${a} is not a perfect number`;
    }
};
let result = perfectNumber(7);
console.log(result);

 */

//Task 6

//Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.

/* function perfectNumber(a) {
    let result = 0;

    for (let i = 1; i < a; i++) {
        if (a % i == 0) {
            result += i;
        }
    }
    if (result === a) {
        return `number ${a} is perfect`;
    }
}

function perfectDiapazon(a, b) {
    for (let i = a; i <= b; i++) {
        if (perfectNumber(i) !== undefined) {
            console.log(perfectNumber(i));
        }
    }
}

let result = perfectDiapazon(1, 29);

 */


//Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
//Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
//Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
//Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»
