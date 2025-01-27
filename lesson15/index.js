// const arr = [13,435,747,741,74,335,25,77,83];
// let max = arr[0]
// let min = arr[0]

// for (let i=1; i< arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }


// function hello(name) {
//     console.log(`hello ${name}`);
    
// }

// function input(callback) {
//     const name = prompt('Enter your name');
//     callback(name);
// }

// input(hello);

// const createPlayer = (initialScore) => {
//     let score = initialScore; 
//     return {
//     getScore: function() {
//     return score;
//     },
//     addScore: function(amount) {
//     score += amount;
//     }
//     };
//     }
//     const player1 = createPlayer(100);
//     console.log(player1.getScore()); 
//     player1.addScore(50);
//     console.log(player1.getScore()); 


// const arr = [13,435,747,741,74,335,25,77,83];
// const resultSome = arr.some(el => el %3 === 0)
// const resultSome2 = arr.some(function(){

//     });

//     for(let i = 0; i < array.length; i++) {
//         if(f(arr[i]) === true) {
//             break;
//         }
        
//     }

//     function f(element) {
//         return element % 3 === 0
//     }

//     const arrF = el => true

// let res = false;
// for (let i = 0; i < arr.length; i++) {
//     const isTrue = f(arr[i])
//     if (isTrue) {
//         res = true;
//         break
//     }
// }

// function f(element) {
//     if (element % 3 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const resultEvery = arr.every(el => el > 0)
// console.log(resultEvery);

// const resultFilter = arr.filter(el => el %3 === 0)
// console.log(resultFilter);

// const resultSort = arr.sort((a, b) => a-b)
// console.log(resultSort); //unicode

// const resultSort2 = arr.toSorted((a, b) => a-b)
// console.log(resultSort2); //does not change source

// const toflatArr = [[1,2,3],[5,6],7]; // open brackets
// const flatArr = toflatArr.flat();
// console.log(flatArr);

// const arr = [13,435,747];

// arr.forEach((el, i, arr) => {
//     console.log(el);
//     console.log(i);
//     console.log(arr);
    
// })

// arr.map((el, i, arr) => {
//     console.log(el);
//     console.log(i);
//     console.log(arr);
    
// })
// arr.forEach(el => {
//     console.log(el*2);
// });

// const resultMap = arr.map(el => el*2);
// console.log(resultMap);
// const flatMapArr = [[2],[3],[4],[5]];
// const resultFlatMap = flatMapArr.flatMap (el => {
//     if (el.length > 1){
//     return el.flatMap(el => el*8)
//     } else {
//         return el * 8;
//     }
// })
// console.log(resultFlatMap);


// const arr = [13,435,747,741,74,335,25,77,83];
// const resultFind = arr.find(el => el === 8);
// console.log(resultFind);

// const arr = [13,435,747,741,74,335,25,77,83];
// const sum = arr.reduce((acc, el) => acc+el, 0)
// console.log(sum);
