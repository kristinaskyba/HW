//task 1

// let a = Number(prompt("введіть початок діапазону", ""));
// let b = Number(prompt("введіть кінець діапазону", ""));
// let sum = 0;

// while (a <= b) {
//     sum += a;
//     a++;
// }

// alert(sum)

//task 2

// let a = Number(prompt("введіть початок діапазону", ""));
// let b = Number(prompt("введіть кінець діапазону", ""));
// let result = null;

// for (let index = a; index <= b && index >= 0; index++) {
//     if (a % index === 0 && b % index === 0) {
//         result = index;
//         console.log(result);
//     }
// }
// alert('result is', result);


// task 3
// let number = Number(prompt('enter number'));
// let result = [];
// for (let i = 0; i <= number; i++) {
//     if (number % i === 0 && number % number === 0) {
//         result.push(i);
//         console.log(result);
//     }
// }
// alert(result);

//task 5

// let qustionNumber = 10;
// let chet = null;
// let nechet = null;
// let zero = null;
// let plus = null;
// let minus = null;
// let arr = [];

// for (let i = 0; i <= qustionNumber; i++) {
//     const requestNumber = Number(prompt('enter numbers'));
//     arr.push(requestNumber);

//     if (requestNumber < 0) {
//         minus++
//     } else if (requestNumber === 0) {
//         zero++
//     } else(requestNumber > 0)
//     plus++
//     requestNumber % 2 ? chet++ : nechet++
// }
// console.log(chet, nechet, zero, plus, minus);

//Task 6
// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, 
// решить пример, вывести результат и спросить, хочет ли он решить еще один пример. 
// И так до тех пор, пока пользователь не откажется.

// let result = null;

// do {
//     let number1 = Number(prompt('Enter number 1'));
//     let number2 = Number(prompt('Enter number 2'));
//     let sign = prompt('Enter sign');
//     switch (sign) {
//         case ('+'):
//             result = number1 + number2;
//             break;
//         case ('-'):
//             result = number1 - number2;
//             break;
//         case ('/'):
//             result = number1 / number2;
//             break;
//         case ('*'):
//             result = number1 * number2;
//             break;
//         default:
//             break;
//     }
//     alert(result);
// }
// while (confirm('wanna count again?'));

// Task 7
// Запросить у пользователя число и на сколько цифр его сдвинуть. 
// Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

//не правильное решение в гите

// const first = prompt("Enter number");
// const second = Number(prompt("Enter move count number"));
// let resultString = first.slice(second, first.length);
// let resultCut = first.slice(0, second)
// let result = resultString + resultCut;

// alert(`
//         number: ${first}
//         step: ${second}
//         result: ${result}
//     `)

//Task 8

//Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

// let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// let currDay = 0;

// while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
//     currDay = (currDay + 1) % days.length;
// }

//Task 9
//Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let multi = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(number);

// for (let i = 2; i < 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }

// }

//Task 10
//Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, 
//записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». 
//В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

// alert('Загадайте число');
// let first = 100;
// let second = 0;
// let number = null;
// let number50 = null;
// let result = 100 / 2;
// let step = 1;

// do {
//     if (first - second === 1) {
//         alert('Вы выбрали 100');
//         break;
//     };
//     let isContinue = confirm('Ваше число ' + result + '?');
//     if (isContinue) {
//         alert(`Ура! Я угадал твое число за ${step} шагов`);
//         break;
//     } else {
//         step = step + 1;
//         let isMore = confirm('Число больше ' + result + '?');
//         if (isMore) {
//             second = result;
//         } else {
//             first = result;
//         }
//         result = Math.floor((first + second) / 2);
//         console.log(`min = ${second}; max = ${first}; result = ${result}`);
//     }
// } while (true);