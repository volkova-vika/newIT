let i = 0

// while (i < 5) {
//     alert (i);
//     i++;
// if (i === 5) {
//     break;
// }
// }

// do {
//     alert (i);
//     i++;
// } while (i < 5);

// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//     console.log(i);
// }
// }

// const arr = [545,24952,544,524,54,224]

// for (const i in arr) {
//     console.log(i, arr[i]);
// }

// for (const el of arr) {
//     console.log(el);
// }

// const obj = {
//     name: "kejfke",
// }
// obj.age = 100;
// obj.name = "jkefddddd";
// console.log(obj);

// const cat = {
//     name: "cat",
//     age: 8,
//     kittens: ["barsik"]
//     }

//     const cat2 = Object.create(cat);
//     cat2.kittens = ['barsik'];
//     console.log(cat2);
//     console.log(cat2.kittens
//     );
    
//     const keys = Object.keys(cat);
//     console.log(keys);

//     const values = Object.values(cat);
//     console.log(values);

//     const entries = Object.entries(cat);
//     console.log(entries);

const person = {
    name: "John Doe",
    age: 30,
    gender: "male",
};

const person2 = person;

console.log("person", person);
console.log("person2", person2);

person.age = 33;
person2.name = "Jane Doe";

console.log("person", person);
console.log("person2", person2);

const person3 = Object.assign(person);
person3.name = "eljknfwkjfn";
console.log("person3", person3);



    
    