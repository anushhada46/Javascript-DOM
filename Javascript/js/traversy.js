//var, let, const

//not to use var as it is globally defined scope the variable defined once cannot be dfined again to another one instead use let

const naame = "Ram"; //constant cannot be double taken or changed later
  
let age = 22; //it is a number define in let which can be changed later

console.log('My name is ' + naame + ' and I am '+ age + ' years old'); //old way of concatenation

console.log(`My name is ${naame} and I am ${age} years old`);//new way of concatenation using `` backticks

console.log(naame.length); //counts the length of the string

console.log(naame.toUpperCase()); //changes string to uppercase

console.log(naame.substring(0,3).toLowerCase()); //first it displays only 3 letters of the string and then changes in lowercase

let wt = 'html, css, javascript, jquery, bootstrap, PS';

console.log(naame.split('')); //splits the string letter by letter

console.log(wt.split(',')); //splits strings word by word

//Arrays => variable that holds multiple values

const numbers = ['one', 'two', 'three']; //typical way of defining an array

console.log(numbers);

numbers[3] = 'four'; //adds value to the array

console.log(numbers);

numbers.push('five'); //pushes my value to the end, it is used when there are many values in the array

console.log(numbers);

numbers.unshift('six'); //pushes my value at the beginning

console.log(numbers);

numbers.pop(); //removes the last item

console.log(numbers);

console.log(numbers[2]); //arrays are 0 based

console.log((Array.isArray(numbers))); //to check wether it is a array or not

console.log(numbers.indexOf('six'));  //display the3index of desired value

const person = {
    firstName : 'Anush',
    lastName : 'Hada',
    age : 30,
    hobbies : ['music', 'movies', 'sports'], //array
    address : {                 //embeded object object within object
        street : 'Taumadhi-12',
        city : 'Bhaktapur',
        state : 3
    }
}

console.log(person);

console.log(person.address); 

console.log(person.hobbies[1]); //prints the 2nd value of hobbies

console.log(person.address.city);

const { firstName, lastName, address: {city}} = person; //pull out the values from person

console.log(city);

person.email = 'ahadacraft@gmail.com'; //adding values to the person 

console.log(person);

const todos = [
    {
        id : 1,
        text : 'take out trash',
        isCompleted : true
    },
    {
        id : 2,
        text : 'brush teeth',
        isCompleted : true
    },
    {
        id : 1,
        text : 'sleep',
        isCompleted : false
    }
];

console.log(todos);

console.log(todos[1]);

//for loop

for(let i = 0; i < todos.length; i++ ){
    console.log(todos[i].text);
    console.log(`For loop number:${i}`);
}

//while loop

let i = 0;
while(i<10){
    console.log(`while loop number: ${i}`);
    i++;
}

//do while

do{
    console.log(`dowhile loop numbers: ${i}`);
}

while(i<10)
{
    i++;
}

//forEach, map, filter
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})  //returns only true values

console.log(todoCompleted);

//JSON

const todoJSON = JSON.stringify(todos); //converts in to JSON

console.log(todoJSON);

let x = 10;
let y = 5;

if(x == 10 && y == 5){
    console.log('x is 10');
} //doesnot need to match with data type, only checks the value


if(x === 10){
    console.log('x is 10');
}

else{
    console.log('datatype doesnot match');
}  //the data type should also match

//ternary opertor

const a = 4;
const color = a < 10 ? 'red' : 'blue'; //if condition matches then print red or else print blue
console.log(color);

//switch
switch(color){
    case 'red':
        console.log('color is red');
            break;
        case 'blue':
            console.log('color is blue');
            break;
        default:
            console.log('color is nor red nor blue');
            break;
}


function addNums(num1, num2)
{
    return num1 + num2;
}
console.log(addNums(5,5));

//Constructor function
/*
function Person(firstName, lastName, dob)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); //string turned into date
}

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}*/

//class
class Person{
    constructor(firstName, lastName, dob)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob); //string turned into date
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }
}

//Instanciate onject
const person1 = new Person('John', 'Doe', '3-5-1999');
const person2 = new Person('Mary', 'Jane', '6-6-2000');

console.log(person2.getBirthYear);


