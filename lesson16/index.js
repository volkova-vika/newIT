// function f() {
//     console.log(this);    
// }
// f();

// const obj = {
//     name: 'John',
//     age:30,
//     greet: function () {
//         console.log(this);
//     }
// }

// obj.greet();

// const objArrow = {
//     name: 'John',
//     age:30,
//     greet:  () => {
//         return this.name
//     }
// }
// console.log(objArrow.greet());

// const obj = {
//     name: 'John',
//     age:30,
//     greet: function (add = 5) {
//         console.log(`Hello my name is ${this.name}`);
//         console.log(add);
        
//     },
// };

// const obj2 = {
//     name: 'Nick',
//     age: 54,
// }
// obj.greet.bind(obj2)();
// obj.greet.bind({name: 'bind', age: 30})();
// obj.greet.call({name: 'call', age: 30});
// obj.greet.apply({name: 'apply', age: 30},[10]);

// CLASSES

// class Person {
//     constructor(name,age) {
//     this.name = name;
//     this.age = age;
//     }
//     greet() {
//     console.log(`Hello, my name is ${this.name}`);
//     console.log(`this ${this.age}`);
//     }
//     static getClassName() {
//         return 'Person'
//     }

    
//     }
//     const alice = new Person('Alice');
//     alice.greet(); // Hello, my name is Alice
    
//     console.log(Person.getClassName());

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }
// greet() {
//     console.log('My name is ${this.name}');
    
// } 

// class Dog extends Animals {
//     constructor (name, type) {
//         super(name);
//         this.type = type;
//     }

//     bark() {
//         console.log(`${this.type} ${this.name} barks!`);
        
//     }
// }
// const rex = new Dog('Rex');
// rex.greet ();
// rex.bark ();

// ASYNC CODE
// console.log(1);
// setTimeout(() => console.log(2), 2000);
// console.log(3);


// function fetchData() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const data = { name: 'Alice', age: 25 };
// 			resolve(data);
// 		}, 1000);
// 	});
// }

// fetchData()
// 	.then(data => {
// 		console.log(data); // { name: 'Alice', age: 25 }
// 	})
// 	.catch(error => {
// 		console.error(error);
// 	});


    // async function fetchData() {
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             const data = { name: 'Alice', age: 25 };
    //             resolve(data);
    //         }, 1000);
    //     });
    // }
    
    // async function main() {
    //     try {
    //         const data = await fetchData();
    //         console.log(data); // { name: 'Alice', age: 25 }
    //     } catch (error) {
    //         console.error(error);
    //     } finally {
    //         console.log('Finally');
    //         console.log('All good');
            
    //     }
    // }
    
    // main();


    // async function fetchUserData() {
    //     try {
    //         const response = await fetch(
    //             'https://jsonplaceholder.typicode.com/users/2'
    //         );
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         const user = await response.json();
    //         console.log(user);
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // }
    
    // fetchUserData();

    // async function postData() {
    //     const data = {
    //         title: 'foo',
    //         body: 'bar',
    //         userId: 1,
    //     };
    
    //     try {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    //             method: 'POST', // Метод запроса
    //             headers: {
    //                 'Content-Type': 'application/json', // Указываем тип содержимого
    //             },
    //             body: JSON.stringify(data), // Преобразуем объект в JSON
    //         });
    
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    
    //         const result = await response.json();
    //         console.log('Success:', result);
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // }
    
    // postData();

    async function postData() {
    
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos/3', {
                method: 'GET', // Метод запроса
                headers: {
                    'Content-Type': 'application/json', // Указываем тип содержимого
                },
            });
    
            const result = await response.json();
            console.log('Success:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    postData();










