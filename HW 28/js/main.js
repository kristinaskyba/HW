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

//task 4

// let number = function (num) {
//     let chet = 0;
//     let nechet = 0;
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] % 2 == 0) chet++;
//         else nechet++;
//     }
//     return [chet, nechet];
// }
// let a = prompt('enter numbers');
// let result = number(a);
// alert(result);

//не могу перевести prompt в цифры