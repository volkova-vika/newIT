const userName = document.querySelector('#username');
const fullName = document.querySelector('#fullname');
const saveBtn = document.querySelector('#save');

const userNameInfo = document.querySelector('#last-username');
const userFullNameInfo = document.querySelector('#last-fullname');
const userDateInfo = document.querySelector('#input-date');
const btnClear = document.querySelector('#clear');

saveBtn.onclick = () => {
    const date = new Date();
    const userInfo = {
    id: date.getTime(),
    userName: userName.value,
    fullname: fullName.value

};
const arr = [];
const users = sessionStorage.getItem('users');
    if (users) {
        arr.push(...JSON.parse(users));
    }
    arr.push(userInfo);

sessionStorage.setItem('lastUser', JSON.stringify(userInfo));
// localStorage.setItem('lastUser', JSON.stringify(userInfo));
console.log(userInfo);
getLastUser();
};

function getLastUser () {
    // const lastUser = localStorage.getItem('lastUser');
    // const lastUser = sessionStorage.getItem('users');
    // if (lastUser) {
    // const parsedUser = JSON.parse(lastUser);
    // userNameInfo.textContent = parsedUser.userName;
    // userFullNameInfo.textContent = parsedUser.fullname;
    // userDateInfo.textContent = new Date(parsedUser.id).toLocaleString();
    // } else {
    // userNameInfo.textContent = "No user saved yet";
    // userFullNameInfo.textContent = "Not saved yet";
    // userDateInfo.textContent = "No date saved yet";
    // }
    const users = sessionStorage.getItem('users');
    if (users) {
        const parsedUsers = JSON.parse(users);
}

getLastUser();
btnClear.onclick = () => sessionStorage.clear();



}
