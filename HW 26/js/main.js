// // Task1

// let age = prompt('Сколько Вам лет?', 'Введите возраст');
// if (age >= 0 && age < 12) {
//     alert('Ребенок');
// } else if (age >= 12 && age < 18) {
//     alert('Подросток');
// } else if (age >= 18 && age < 60) {
//     alert('Взрослый');
// } else if (age >= 60) {
//     alert('Пенсионер');
// } else('')
// alert('error');


// //  Task2       

// let num = prompt('enter number');

// switch (num) {
//     case '1':
//         alert('!');
//         break;

//     case '2':
//         alert('@');
//         break;

//     case '3':
//         alert('#');
//         break;

//     case '4':
//         alert('$');
//         break;

//     case '5':
//         alert('%');
//         break;

//     case '6':
//         alert('^');
//         break;
//     case '7':
//         alert('&');
//         break;
//     case '8':
//         alert('*');
//         break;
//     default:
//         alert('Неизвестное число');
// }

// Task3

// let str = prompt('Введите трёхзначное число');
// let text = 'Повторяющихся цифр в числе нет';
// let err = 'error'
// for (let j = 0; j < str.length; j++) {
//     if (str.split(str[j]).length > 2) {
//         alert('В числе имеются повторяющиеся цифры');
//         break;
//     } else if (str.split(str[j]).length < 2) {
//         alert(text);
//     }
// };

// Task4

// let year = prompt('what year?');

// if (year % 4 == 0 && year % 100 != 0) {
//     alert('Не удачный год');
// } else alert('Хороший год');

// Task5


// let strLen = prompt('enter text');
// let strReverse = strLen.split('').reverse().join(''); //Разбиваем строку посимвольно  и превращаем ее в массив с помощью split(''), потом применяем к нему метод reverse() и собираем все символы в строку с помощью join('')
// if (strReverse == strLen) {
//     alert('yes');
// } else {
//     alert('no');
// }

// Task6

// Task7

// let sum = prompt('enter summ');

// if (sum >= 200 && sum < 300) {
//     alert(sum / 100 * 97 + ' your discount is 3%');
// } else if (sum >= 300 && sum < 500) {
//     alert(sum / 100 * 95 + ' your discount is 5%');
// } else if (sum >= 500) {
//     alert(sum / 100 * 93 + ' your discount is 7%');
// }