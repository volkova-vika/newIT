// function isPrime(n) {
//     if (n <= 2) {
//       return 'не является простым';
//     }
//     for (let i = 2; i < n; i++) {
//       if (n % i == 0) {
//         return 'не является простым';
//       }
//       return 'простое число';
//     }
// }
//   console.log(2, isPrime(2));
//   console.log(11, isPrime(11));
//   console.log(0, isPrime(0));
//   console.log(22, isPrime(22));
//   console.log(1, isPrime(1));
//   console.log(19, isPrime(19));

// function isPalindrome(str) {
//     if (str === str.split('').reverse().join('')) {
//         str = str.toLowerCase();
//         return true;
//     } else {
//         return false;
//     }
// }

//   console.log('tell if this phrase is a palindrome -', 'was it a car or a cat I saw', isPalindrome('was it a car or a cat I saw'));
//   console.log('tell if this phrase is a palindrome -','Avid diva', isPalindrome('Avid diva'));
//   console.log('tell if this phrase is a palindrome -','madam', isPalindrome('madam'));
//   console.log('tell if this phrase is a palindrome -', '14577541', isPalindrome('14577541'));

// let arr = [1,4,6,7,446,446,8,2,4,6,8,5,8,4,4,8,6];
// function uniqueValues(arr) {
//     let arr2 = arr.slice();
//     let unique = [];
//     for (let i=0; i < arr2.length; i++) {
//         if (!unique.includes(arr2[i])) {
//             unique.push(arr2[i]);
//     }
// }
// return unique;

// }
// console.log(uniqueValues(arr));



// const arr = [-12, -381, -5, 0, 32, 164, 978]
// function sumRange(start, end) {
//     let sum = 0;
//     for (let i = start; i <= end; i++) {
//         sum += arr[i]; 
//     }
//     return sum;
// }

// console.log(sumRange(0, 3));
// console.log(sumRange(4, 6));

// let str = 'set up to upper case';

// function strUp(str) {
//     let arr = str.split('');
//     let unique = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (str.indexOf(arr[i]) === str.lastIndexOf(arr[i])) {
//             unique.push(arr[i]);
//     }
// }
// console.log(unique);
// }

// strUp(str);


// function number(a) {
//     const arr = [];
//     for (let i = 0; i < a; i++) {
//         arr.push(Math.floor(Math.random()*101));
//     }
//     console.log(arr); // рандомный массив

//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     console.log(max); // макс. значение
    
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] <= min) {
//             min = arr[i];
//         }
//     }
//     console.log(min); // мин. значение

//     function sumRange(start, end) {
//     let sum = 0;
//     for (let i = start; i <= end; i++) {
//         sum += arr[i]; 
//     }
//     return sum;
// }
//     console.log(sumRange(0, 14)); // сумма всех чисел
 
//     let average = sumRange(0, 14) / arr.length;

//     console.log(average); // среднее арифметическое
    

// }
// number(15);


// function arr(n) {
//     if (n <= 0) {
//         console.log();
//         return [];
//     }
    
// }  // will finish a bit later - need to spend more time (will comment on this one together with the next hometask :)




