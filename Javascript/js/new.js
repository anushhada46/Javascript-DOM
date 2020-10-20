//single element selector
/*console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));


//multiple element selector
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));


const ul = document.querySelector('.items');

// ul.remove();

// ul.lastElementChild.remove();

ul.firstElementChild.textContent = 'Hello'; //Changes 1st child as Hello

ul.children[1].innetText = 'Brad'; //Changes the 2nd child as Brad

ul.lastElementChild.innerHTML = '<h1>Hello</h1>'; //adds HTML dynamically

const btn = document.querySelector('.btn');

btn.style.background = "red";

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();     //prevents form submission
    console.log('click');
}); 

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();     //prevents form submission
    document.querySelector('#my-form').style.background = '#ccc'
    document.querySelector('body').classList.add('bg-dark');
}); */


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e){

    e.preventDefault();

    if(nameInput.value === '' || emailInput === ''){
        msg.classList.add('error');
        msg.innerHTML = "Please enter fields.";

        setTimeout(() => msg.remove(), 3000);
    }
    else{
        const li = document.createElement('li');
        
        li.appendChild(document.createTextNode(`${nameInput.Value} : ${emailInput.value}`));

        userList.appendChild(li);

    }
}