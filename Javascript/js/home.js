console.log('Hello');
// alert('Hello this is anush');

// var b='anush';
// alert(b);

var someNumber=45;
console.log(someNumber);


// var age=prompt('what is ur age?');

// document.getElementById('text').innerHTML =age;


//Numbers in JS

var num1 = 5;
var num2 = 6;
console.log(num1 % num2);
num1++;
console.log(num1);

// incre/decre by any num
num1 +=10;
console.log(num1);

/*function
1.create a function
2. call a function
*/

//create
function fun(){
    console.log('This is a function');
}


//call
fun();

/*lets create a func. that takes the name and returns hello followed by your name*/


/*function greeting(yourName){
    var result = 'Hello ' + yourName;  //string concatination
    console.log(result);
}

var name=prompt('What is your name?');
greeting(name);*/

//how do arguments work in functions?
//how do we add two number in a function

function sumNumbers(num1, num2){
    var result = num1+num2;
    console.log(num1+num2);
}

sumNumbers('10','10');


//whileloops
var num=0;
while(num<100){
    num+=1;
    console.log(num);
}


//for loop
for(let num=0; num<100; num++){
    console.log(num);
}


//for loop 
for(let abc=5; abc<=20; abc+=6){
    console.log(abc);
}


//data types

let yourAge = 22;
let yourName = 'Anush';
let name = {first: 'Anush', last: 'Hada'};
let truth = false;
let groceries = ['apple','banana', 'oranges'];
let random;
let nothing= null;

//strings in JS
let fruit = 'banana';
let moreFruits = 'banana\napple';


console.log(fruit.length);
console.log(fruit.indexOf('a'));
console.log(fruit.slice(2, 4));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); //split by a comma
console.log(fruit.split(''));  //split by characters


//arrays
let bikes = ['yamaha', 'suzuki', 'honda', 'ducati'];
bikes =new Array('yamaha', 'suzuki', 'honda', 'ducati');

console.log(bikes[1]);  // access values from array

bikes[1] = 'aprilia';
console.log(bikes);


for(let i=0; i<bikes.length; i++){
    console.log(bikes[i]);
}

//array common methods
console.log('to string\n',bikes.toString());
console.log(bikes.join('*'));
console.log(bikes, bikes.pop(), bikes);
console.log(bikes,bikes.push('bmw'),bikes);
bikes.shift();
console.log(bikes);

let cars = ['bugati', 'lamborgini'];
let autoCars = bikes.concat(cars); //combine arrays
console.log(autoCars);
console.log(autoCars.slice(1,4));  //prints 1 and 4 from array
console.log(autoCars.reverse());  //array in reverse
console.log(autoCars.sort()); //sorts out the array


//number sorting
let anyNumbers=[50,50, 34, 34, 34, 45, 23, 223, 532, 12];
console.log(anyNumbers.sort(function(a,b){return a-b}));  //a-b for ascending & b-a for descending


let emptyArray = new Array();
for (let num = 0; num <=10 ; num++){
emptyArray.push(num);
}
console.log(emptyArray);



//objects in javascript
let student = {
    first: 'anush',
    last: 'hada',
    age : '25',
    height : 170,
    studentInfo: function (){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
 };
 console.log(student.first);
 console.log(student.last);
 

 student.first = 'notAnush' ;
 console.log(student.first);
 console.log(student.studentInfo());

 //if else consition and switch statement
 /*var consumed = prompt("unit consumed =");
 var fixRate = 50;

 if(consumed<=50){
    console.log("Total price = Rs. 50");
 }
 else{
    console.log("You have to pay more");
 }*/
