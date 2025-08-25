// ...code, repeate, maintain
// compiler   interpreter js --->  0, 1
// var x = 5;

/* variables --> store data
 dynamic typing, lossly typing
 decleration assignment */

// var x = "ahmed";
// var x; 
// console.log(typeof(x))
// x = "ahmed";
// console.log(typeof(x))


// var x = 7;
// var y = 10;
// var z = x + y;
// var X = 8;

// var firstName= "omer";
// console.log( 7 - 2);
// console.log("hello");
// console.log(x);

// var if = 9;
// x = 10;
// var y = 5;
// var unique name

// Datatypes
// 1) string
// var x = "mai hello kklk";
// var y = 'osama';
// var z = '255888v  mkkk true false';

// console.log(typeof(x));
// console.log(typeof(y));
// console.log(typeof(z));
// console.log(y , x);
// string template

// 2) Number
// var x = 50;
// var y = 14.2;
// var z = -99;

// console.log(typeof(x));
// console.log(typeof(y));
// console.log(typeof(z));
// console.log(y , x);
// 3) boolean
// var y = false;
// var z = true;

// console.log(typeof(y));
// console.log(typeof(z));

// 4) undefined
// var x; 
// console.log(typeof(x));

// var y = undefined;
// console.log(typeof(y)) ;

// 5) null
// var x = null;
// console.log(x, typeof x); // object

// 6) bigint
// var x = 1234567891234561;
// var y = 123456789123456999;


// var z = BigInt('123456789123456999')
// var m = 123456789123456999n;
// // console.log(x)
// // console.log(y)
// console.log(z)
// console.log(m)

// console.log(typeof z); // bigint
// console.log(typeof m);

// console.log(x + z)
//////////////////////////////////////////

// 1) Arthimetic
// var x = "shahd";
// var m = "ahmed";
// var y = 10;
// var z = 5;

// concatenation + --> string
// console.log(x + m);
// add operation
// console.log(y + z);
// console.log( x + y + z);    // shahd105
// console.log( x + (y + z));  //shahd15
// console.log( y + z + x);    // 15shahd
// console.log( y + z / x);   //NaN 


// var x = 5;
// console.log(x++); // increment postfix
// console.log(++x); // increment prefix
// console.log(x)

// decrement
// x--
// --x
// 10+(12-6)*3/2**2

// Math Object
// console.log(Math.round(4.598));//5
// console.log(Math.round(4.198));//4
// console.log(Math.round(4.798));//5
// console.log(Math.ceil(4.598));//5
// console.log(Math.ceil(4.198));//5
// console.log(Math.ceil(4.798));//5
//  console.log(Math.floor(4.598));//4
// console.log(Math.floor(4.198));//4
// console.log(Math.floor(4.798));//4

// console.log(Math.floor(-4.798));//-5
//  console.log(Math.trunc(-4.598));//-4

//  console.log(Math.trunc(4.598));//4
// console.log(Math.trunc(4.198));//4
// console.log(Math.trunc(4.798));//4
// console.log(Math.pow(3, 2))
////////////////////////////////////////////
// 1) assignment

// var x = 5;
// var y = 3;
// var z = y; // value z = 3

// y = 9;

// console.log(x, y, z);

// var x = 5;
// // x = x + 3;
// x+=3;
// console.log(x);
// var x = 5;
// var y = "6"; // numeric string
// console.log(x == y); // value, true
// console.log(x === y); // value, datatype, false
// truth, falsy in js
// var x = 0;
// var y = "0"; // falsy
// console.log( x !== y)
// == Value, === d.type, value
// != value, !== d.type, value

// Logical Operators
// console.log( (5 < 3) && (6 > 10)) 
// and --> 1 1 -->true
// console.log( (5 > 3) || (6 < 10)) 
// or true ---> at least one condition true
// console.log(!(5 == 5));
// 0--> 1
// 1--> 0


// concatenation --> +
// var fname = "rahma";
// var lname = "rabea";
// var age = 20;
// var id = 16;

// hello name, your age is .. , your id is .., 
// var message = "hello "+fname+" "+lname+", your age is "+age;
// var message = `hello ${fname} ${lname} , your age is ${age}` ;
// console.log(message)


// id, fname, birthday
// "your name is mai, your birthday is , and your "id" is "
/////////////////////////////////////////
// conditional statment
// 1) if
// var fname ="ahmed";
// var type = "female";


// if statment
// if(type == "female"){
//     console.log("famale");
// }else{
//     console.log("male");
// }


// var temp = 35;
// var city= "cairo";

// if(temp <= 0){
//     console.log("very cold");
// }else if(temp > 0 && temp <= 20){
//     console.log("cold");
// }else if(temp > 20 && temp <=30){
//     console.log("warm");
//     if(city == 'cairo'){
//         console.log("yes")
//     }
// }else{
//     console.log("hot");
// }


// switch
// User, admin, superadmain, saller


// switch === value, d.type
// var type = "";
// switch(type){
//     case "admin":
//         console.log("admin");
//         break;

//     case "user":
//         console.log("user");
//         break;

//     case "superAdmin":
//         console.log("superAdmin");
//         break;
//     default:
//         console.log("you can't login");
// }


// var x = new Math(); //wrong
// x.PI

// var date = new Date();
// console.log(date.getMonth());



// switch (date.getDay()) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case  6:
//     console.log("Saturday");
// }
/////////////////////////////////////////////
// after break
// ternary operators
// ternary operator
// (type == "female")?  console.log("female"): console.log("male");
// (type == "female")?  console.log("female"): null;

// nullish
// var x ;
// console.log(x ?? "person");
// console.log(x)


///////////////////////////////////////////
// let, const, var

// var x = 2;
// redecleartion
// var x = 3;
// reasignment
// x = 5;
// console.log(x);

//////////////////////////////
// let x = 2;
// reasignment
// x = 5;
// donot allow redecleration
// let x = 10;
// console.log(x);
//////////////////////////////
// const pi = 3.14;
// donot allow redecleration or reassignment
// pi = 5;
// const pi = 7;
// console.log(pi);
//////////////////////////////
// var x = 15;
// hoisting --> var
// x = 10;
// console.log(x);
// var x;
// console.log(x);


// var x; //undefined
// console.log(x);
// x = 10;
// console.log(x);

///////////////////////////////////////////
// string

// literal string
// let x = 'osama ahmed';
// let x = new String("mai");
let x = "osama ahmed";

// console.log(x.length);
// console.log(x[-3]); //undefined
// console.log(x.charAt(x.length-3))
// console.log(x.at(-3)); // negative, positive index
// console.log(x.charAt(3));
// console.log(typeof(x)); //  object
// string as series of letters --> array
// length = 11
// index [0,1, ... ,10(length -1)]
// -2, -1

// concate
// extracting