///////////////////////////////
// function --> block of code
// decleration fun.
// (1)
// function printHello(){
//     console.log("hello");
// }
// // calling
// printHello();
///////////////////////////////////
// 2) i/ps, no o/ps
// let fname = "kamal";
// let password = "llllj85";

// // function hoisting
// insertUser(fname, password); //arguments

// function insertUser(x, y){ //parameters
//     console.log(x, y);
//     //20
// }
// console.log(insertUser(fname, password)); // undefined -->noreturn
// console.log(insertUser); //decleration fun
// console.log(typeof(insertUser));


// insertUser("mohamed", "5658882kkk");
////////////////////////////////////////
// 3)  no i/ps, o/ps

// function greeting(){
//     let message ="blablablaaaa";
//     // return "hello!";
//     return message;
//     // kkkkkk
// }

// console.log(greeting());

////////////////////////////////////////
// 4)  i/ps, o/ps --->

// function add(num1, num2){
//     let result = num1 + num2;
//     console.log(result);
//     return result;
// }
// console.log(typeof(add)); // function  --> js as object 
// console.log(typeof(add(1, 2))); // number 

// console.log(add(3, 20) + 20);
// type hint
// console.log(add(3, 10));
// console.log(add(5, 2));
// console.log(add(5, 3));
// console.log(add(5, 10));
// console.log(add(5, 7));
// console.log(add(10, 2));
// console.log(add(5, 2));
/////////////////////////////////////////////
// Invocation types
///////////////////
// 1) byname
// 2) self invocation
    // (function(){console.log("ok")})();
// 3) by events --> onclick
//////////////////////////////////////////
// expression function
// function nameh(){
//     //code
// }
// nameh();


// const x = function add(y , z){
//     return y+ z;
// }
// console.log(x(10, 5));


// const x = function(y , z){
//     return y+ z;
// }
// console.log(x(10, 5));

// Arrow function --> shorthand function  
// no hoisting , this
// console.log(typeof(x(5, 7)))
// const x = (y , z) => y + z;
/////////////////////////////////
// parmeters
// default parameter

// function multiply(num1= 1, num2 = 5, num3){
//     return num1 * num2 * num3;
// }
// function multiply(num3, num1= 1, num2 = 5){
//     return num1 * num2 * num3;
// }
// console.log(multiply(10, 5));
// console.log(multiply());
// console.log(multiply(6));
// console.log(multiply(10))// 10*5*undefined = NaN
// console.log(multiply(10))// 10, 1, 5

// rest parameter
// function sum(...args){
//     console.log(arguments.length);
// }
// sum(5, 2);
// sum(5, 2, 3);
// sum(5);
// sum();

// function test(...args){
//     // looping args
//     console.log("test")
// }
// test();
// test(5);

// callbackfunction
// function greeting(name){
//     console.log(`hello ${name}`);
// }

// function insertUser(callback){
//     const name= "mai";
//     callback(name);
// }

// insertUser(greeting);
// name = mai 
// hello ${name}

////////////////////////////////////////////////
// recursive function
// shadowing 
// scope--> global, local, block
// var, let, const
// 1) any variable decleration in global scope see in all scopes
// global
// var x = 2;
// let y = 5;
// const z = 20;
// // console.log(x, y, z);

// function test(){
//     // local
//     console.log(x, y, z)
// }
// test();

// if(3 == 3){
//     // block
//     console.log(x, y, z)
// }


//////////////////////////////////////////////////////////////////
// 2) any variable decleration in local scope see in it`s scope
// global

// function test(){
//     // local
//     var x = 2;
//     let y = 5;
//     const z = 20;
//     console.log(x, y, z)
// }
// test();
// console.log(x);
// console.log(y);
// console.log(z);

// if(3 == 3){
//     // block
//     // console.log(x);
//     // console.log(y);
//     console.log(z);
// }

// 2) let, const in block scope see in it`s scope, var show in any scope
// global
// if(3 == 3){ if, for
//     // block
//     var x = 2;
//     let y = 5;
//     const z = 20;
//     // console.log(x, y, z);
// }

// console.log(x); // var
// console.log(y);
// console.log(z);
// function test(){
//     // local
//     // console.log(x);// var
//     // console.log(y);
//     // console.log(z);
// }
// test();

 
// let x = 7;
// let msg="";
// if(x <= 5){
//     msg += "the number is greater than 5";
// }else{
//     // 
// }
// console.log(msg);

// function test(){
//     let x = "ok";
//     return x;
// }
// let result = test();
// function test(){
//     let x = "ok";
//     if(true){
//         console.log(x)
//     }
// }
// test();


// function test(){
//     if(true){
//         let x = 100;
//         console.log(x); // 100
//     }
//     console.log(x); // error
//     function test2(){
//         console.log(x) // error
//     }
//     test2();
// }
// test();
/////////////////////////////////////
// recursive function 
// function countDown(number){
//     if(number > 0){
//         console.log(number); //10, 9, .... , 1
//         return countDown(number-1); //countDown(9), countDown(8), ..., countDown(0) 
//     }
// }
// countDown(10);
/////////////////////////////////////////
// shadowing --> decleration in global , reassignment variable in local scope
// var x = 2;
// let x = 2;
// console.log(x); //2

// function sum(){
//     x = x + 5;
//     console.log(x); //7
// }
// sum();

// console.log(x); //7

// let x = 2;
// console.log(x);  //2

// function sum(){
//     let x = 10;
//     console.log(x);  //10
// }
// sum();

// console.log(x); // 2

////////////////////////////////////////
// shadowing in js
// the secret 
// the process
// the secret


///////////////////////////////////
// reference , value

// let x = 10;
// function test(num){
//     num+=5; //15
//     return num; //15
// }
// console.log(test(x)); // value

// console.log(x);

// let num = 10;
// function test($num){
//     num+=5; //15
//     return num; //15
// }
// console.log(test(num)); // reference ($) name parameter = name variable

// console.log(num);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
// string methods
// extracting string
// let text = "hello World!";
// console.log(text.slice(6, 11));
// // console.log(text.substring(6, 11));
// // console.log(text.slice(-6, -1));
// // console.log(text.slice(6));
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());

// let text = "        hello    World!         ";
// let text2 = text.trim();
// console.log(text.length);
// console.log(text2.length);
////////////////////////////////////////
// padding

// let num = 15;
// let text = num.toString();
// text.padStart(12, "*")

// let num = 15;
// num = num.toString();
// console.log(num.padStart(12, "*"))

//   let text = "Microsoft, Please Microsoft visit Microsoft";
//   console.log(text.replace("Microsoft","W3Schools"));

// array
// let x = "mai mohamed omar shahd ahmed";
// console.log(x.split(" "));

let text = "The rain in SPAIN stays mainly in the plain";
const myArr = text.matchAll("ain")






