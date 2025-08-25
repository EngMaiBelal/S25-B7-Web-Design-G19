////////////////////////////////////////////////
// looping
// console.log("ok");
// console.log("ok");
// console.log("ok");
// console.log("ok");
// console.log("ok");
// console.log("ok");
// console.log("ok");
//////////////////////////////////////////////
//1)for loop

// for(let i = 0; i < 7; i++){
//     console.log("ok");
// }

// for(let i = 0; i <= 12 ; i+=2){
//     console.log("ok");
// }

// for(let i = 7; i > 0; i--){
//     console.log("ok");
// }

// nested loop --> complixity, performance 
// break, continue

// for(let i = 0; i < 7; i++){
//     if(i == 3){
//         // break; // skip loop
//         // continue; // skip current iteration
//     }
//     console.log(i);
// }
//////////////////////////////////////////////
//2) while loop
// let i = 0;
// while(i < 7){
//     console.log(i);
//     i++;
// }

// let i = 0;
// while(i < 7){
    //     console.log(i);
    //     i++;
    // }
// difference for, while
// let fname= prompt("please enter your correct name");
// while(fname === ""){
//     fname = prompt("please enter your correct name");
//     console.log(fname);
// }
//////////////////////////////////////////////
//3) do while loop
// let i = 0;
// do{
//     console.log(i);
//     i++;
// }
// while(i === 1)
//////////////////////////////////////////////
// array --> container store data collections

// let typeMobile ="oppo";
// let colorMobile ="black";
// let blutoothMobile = true;
// let code =  1253698;
// let mobile1 = ["opoo", "black", true, 1235689];
// let colors =["black", "white", "blue"]; 
// oredered, indexed

// black---> element = 1, (index,position) = 0
// length = 3
// console.log(colors)

// let colors =["black", "white", "blue"]; 
// console.log(typeof(colors));

// console.log(Array.isArray(colors));
// console.log(colors instanceof Array);

// console.log(colors[1]); // access element
// console.log(colors[colors.length-1]); // access element

// console.log(colors.at(-1)); // access element
// colors[2] = "pink"; //edit element
// console.log(colors);
// colors[3] = "green"; //add element
// console.log(colors);

// colors[5] = "green"; 
// console.log(colors);
// console.log(colors[3]); //undefined

// nested array
// let arr = [ [1 ,2 , 3], "omer", "osama" ]
// let arr = [ [1 ,2 , 3], [4, 5, 6] ,[7, 8, 9] ]

// console.log(arr[0][1]);
// console.log(arr.at(0).at(1));
// task

// assositive array
// let mobile1 = [
//     name=> "opoo", 
//     color=> "black", 
//     isblutooth=> true, 
//     code=> 1235689
// ];

// const person = [];
// person[0] = "John";
// person[1] = "Doe";
// person[2] = 46;
// console.log(person);


//////////////////////////////////
// type conversion

//// numeric string -->  number
// let data = "123456";
// let data = +"123456";
// let newNumber = Number(data);
// console.log(data + 10);
// console.log(newNumber + 10);
// Number()	Returns a number , decimal , (space, string) --> NaN
// parseFloat()	Parses a string and returns a floating point number , start with number space
// parseInt()	Parses a string and returns an integer, start with number space


// string --> number
// console.log(typeof(String(123)));
// let x = 12356;
// console.log(typeof(x.toString()));

// task --> toExponential(), toFixed(), toPrecision()
///////////////////////////////////////////

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.toString()) // new string
// console.log(fruits.join(" * "))// new string
// console.log(fruits)

// pop--> remove | push --> add --> | end of array 
// fruits.pop();
// fruits.push("Kiwi");
// console.log(fruits)

// shift, unshift--> start of array
// fruits.shift();
// fruits.unshift("Apple");
// console.log(fruits)
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = myBoys.concat(myGirls, arr3);

// console.log(myChildren)


// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// console.log(fruits.copyWithin(1, 0));
// "Banana", "Banana", "Orange", "Apple", "Mango"
// console.log(fruits.copyWithin(3, 1));
// banaan , orange , apple , "Orange", "Apple" 
// console.log(fruits.copyWithin(1, 0, 2));
// "Banana", "Banana", "Orange","Mango", "Kiwi"

// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// [1,2,3,4,5,6];


// const myArr = [1, 2, 3, 4, 5, 6];
//  let newElement = [];
// for(let i = 0; i < myArr.length ; i++){
//     let element =  myArr[i] * 10;
//     newElement.push(element);
// }
// console.log(newElement);


// const newArr = myArr.flatMap(x => [x, x * 10]);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const newFruits = fruits.toSpliced(1, 2 , "lemon", "kiwi")
// console.log(newFruits);
// banana, "lemon", "kiwi","Mango"

// fruits.splice(0, 0, "lemon", "kiwi");
// console.log(fruits);

// fruits.splice(1,2 );
// console.log(fruits);



// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myfunction);
// function myfunction(value, index, array){
//     return index > 1;
// }

// function myfunction(value){
//     return value > 18;
// }
// console.log(first);

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort().reverse());
// console.log(fruits.sort(callback));
// function callback(str1, str2){
//     str1.localCompare(str2);
// }

// fruits[0]+=" fruit";
// fruits[1]+=" fruit";
// fruits[2]+=" fruit";
// fruits[3]+=" fruit";
// console.log(fruits)

// for(let i = 0; i< fruits.length; i++){
//     fruits[i]+=" fruit";
// }
// let test = fruits.forEach(function(element,index, array){
//     fruits[index]+=" fruit";
//     // console.log(value);
//     // if(index === 2){
//     //     // continue, break;
//     // }
//     return "ok";
// })
// console.log(fruits)
// console.log(test) //undefined

// let test2 = fruits.map(function(element,index, array){
//     fruits[index]+=" fruit";
//     return "test2";

// })
// console.log(fruits)
// console.log(test2) // array [test2 , test2, test2 , test2]


// print in documentation 
// let result = "return function";
// document.getElementById("mainPar").innerHTML = result;
/////////////////////////////////////////////////////
// literal object
let user = {
    //properites
    fname: "kamal",
    lname: "ahmed",
    // lname: "osama", // override
    status: true,
    isActive: true,
    // methods
    createProfile: function(){
        // this.greeting();
        return (`${this.greeting()}, your name ${this.fname} ${this.lname}`);
    },
    greeting: function(){
        return "hello! "
    }
}

// user.fname = "omar";
// user.age = 20;
// console.log(user.fname);
// console.log(user['age']);
console.log(user.createProfile());



















//sort array g -> l