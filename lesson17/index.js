const pTextId = document.getElementById('text');
// console.log(pTextId);
// const pTextClass = document.getElementsByClassName('text');
// console.log(pTextClass);
// const pTag = document.getElementsByTagName('p');
// console.log(pTextClass);
// const pQuery = document.querySelector('.c3');
// console.log(pQuery);
// const pQueryAll = document.querySelectorAll('.c3');
// console.log(pQueryAll);

// pTextId.innerText = 'new text'
// setTimeout(() => {
//     pTextId.innerText = 'new Innertext';
//     pTextId.style.color = 'red';
//     pTextId.style.fontSize = '20px'; 
// }, 2000)
// setTimeout(() => {pTextId.textContent = 'new textContent'
//     pTextId.classList.add('p-style');
// }, 4000)
// setTimeout(() => {pTextId.innerHTML = 'new innerHTML'
//     pTextId.classList.remove('p-style');
// }, 6000)

// const helloBtn = document.querySelector('#hello');

// // helloBtn.onclick = () => {
// //     alert('Hello!');
// // };

// helloBtn.addEventListener('click', event => {
//     console.log(event.target.id);
// });

// const inputText = document.querySelector('#inp-text');

// inputText.addEventListener('change', () => {
//     console.log(inputText.value);
// });

// // window.addEventListener('mousemove', event => {
// //     console.log(event.clientX, event.clientY);
    
// // });

// const addMouse = document.querySelector('#add-mouse-move');
// const removeMouse = document.querySelector('#remove-mouse-move');

// addMouse.onclick = () => {
//     window.addEventListener('mousemove', logMousePosition);
// }

// removeMouse.onclick = () => {
//     window.removeEventListener('mousemove', logMousePosition);
// }

// function logMousePosition(event) {
//     console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
    
// }

// const list = document.querySelector('ul');
// const addItem = document.querySelector('#add-item');
// const removeItem = document.querySelector('#remove-item');

// addItem.onclick = () => {
//     const newItem = document.createElement('li');
//     const currentItems = document.querySelectorAll('li');
//     console.log(currentItems);
    
//     newItem.innerText = `Item ${currentItems.length + 1}`;
//     list.appendChild(newItem);
// }

// removeItem.onclick = () => {
    
//     const currentItems = document.querySelectorAll('li');
//     list.removeChild(currentItems[currentItems.length -1]);
// }

// const items = ['Item1', 'Item2', 'Item3', 'jhyvjc'];


// items.forEach(item => {
//     const newItem = document.createElement('li');
//     newItem.innerText = item;
//     list.appendChild(newItem);
// });

