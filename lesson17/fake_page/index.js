const divUser = document.querySelector('.users');
const btnDownload = document.querySelector('#show');

btnDownload.onclick = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        const h3 = document.createElement('h3');
        h3.classList.add('name');
        h3.innerText = user.name;
        const h4 = document.createElement('h4');
        h4.classList.add('username');
        h4.innerText = `@${user.username}`;
        const email = document.createElement('p');
        email.classList.add('email');
        email.innerText = user.email;
        const address = document.createElement('p');
        address.classList.add('address');
        address.innerText = `Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;
        const street = document.createElement('span');
        // street.innerText = 'Street: ';
        const suite = document.createElement('span');
        const phone = document.createElement('p');
        phone.classList.add('phone');
        phone.innerText = `Phone: ${user.phone}`;
        const website = document.createElement('p');
        website.classList.add('website');
        website.innerText = `Website: ${user.website}`;
        const company = document.createElement('p');
        company.classList.add('company');
        company.innerText = `Company: ${user.company.name}, Catchphrase: ${user.company.catchPhrase}, Company Field: ${user.company.bs}`;
        
        userDiv.append(h3, h4, email, address, street, suite, phone, website, company);
        divUser.appendChild(userDiv);
        
    });
};