//////////////////////////////////////////
// OOP --> object orianted programming
// how to organize the code?
// reduce code , 
 
// class --> blueprint code 
// object --> instance of class
// principles
// 1)inheritance 
// 2)encapsulation
// 3)abstraction 
// 4)polymorphizm

/////////////////////////////////////////
// create class
// class User{
//     //properties
//     // fname ="mohamed";
//     // id = 5;
//     constructor(fname, id){
//         this.fname = fname;
//         this.id = id;
//     }
//     //method
//     createProfile(){
//         console.log("create profile")
//     }
//     updateProfile(){
//         console.log("update profile")
//     }
// }
// const user1 = new User("osama" , 10);
// console.log(user1.fname);

// const user2 = new User("kamal" , 9);
// console.log(user2.fname);

// const x = new User("abdallah", 6);
// console.log(x.fname)



// without constructor
// const user1 = new User();
// user1.fname = "osama";
// console.log(user1.fname);
// user1.createProfile();

/////////////////////////////////////////////
// 1) inheritance parent, child
// user --> username, email , password  || create ,     updateprofile

// admin  --> username, email , password , type || create , updateprofile, delete user

// super admin ---> username, password, type || create , updateprofile, delete user, delete admin
// User, admin

// class User{
//     constructor(fname, id){
//         this.fname = fname;
//         this.id = id;
//     }

//     createProfile(){
//         console.log("create profile " + this.fname)
//     }
//     updateProfile(){
//         console.log("update profile " + this.fname)
//     }
// }

// class Admin extends User{
//     constructor(fname, id, type){
//         // this.fname =fname;
//         // this.id =id;
//         super(fname, id);
//         this.type = type;

//     }
//     deleteUser(){
//         console.log("delete User " + this.id);
//     }
// }
// // const user1 = new User("omar", 5);
// // user1.deleteUser();
// const admin1 = new Admin("omar" ,  5 , "asdf");
// // admin1.createProfile();
// console.log(admin1.fname);
// console.log(admin1.type);
// // admin1.deleteUser();

// class Superadmin extends Admin{
//     deleteAdmin(){
//         console.log("delete admin")
//     }
// }
// const superAdmin1 = new Superadmin("omnia", 10, "kkk");
// console.log(superAdmin1.fname)
/////////////////////////////////////////////////
// static  


// class User{
//     static status = true;
//     constructor(fname, id){
//         this.fname = fname;
//         this.id = id;
//     }
//     static createProfile(){
//         console.log("create profile ")
//     }
//     updateProfile(){
//         console.log("update profile " + this.fname)
//     }
// }
// const user1 = new User("shahd", 10);
// user1.updateProfile();
// User.createProfile();
// console.log(User.status);


// class MathOp{
//     static PI = 3.17;
// }
// console.log(MathOp.PI);
////////////////////////////////////////
// inhertance with static preperties, methods
// class User{
//     static status = true;// inherit
//     constructor(fname, id){
//         this.fname = fname;
//         this.id = id;
//     }
//     static createProfile(){//inherit
//         console.log("create profile ")
//     }
//     updateProfile(){
//         console.log("update profile " + this.fname)
//     }
// }
// class Admin extends User{

// }

// const admin1 = new Admin("kamal", 20);
// console.log(admin1.status);
// admin1.createProfile();

///////////////////////////////////

// class User{
// class scope
//     static status = true;
//     static fname = "kamal";
//     static id = 10;
//     constructor(){
//       throw new Error("this class canot be instatiated")
//     }
//     static createProfile(){
//         console.log("create profile ")
//     }
//     static updateProfile(){
//         console.log("update profile " + this.fname)
//     }
// }
// const user = new User();
// user.fname;
// user.createProfile();

////////////////////////////////////////
// encapsulation
// parent scope,  child scope , global scope
// access modifiers 
// puplic, protected, private
// class Car{
//     name ="Nexon";
//     #brand = "TATA";
//     getBrand(){
//         return this.#brand;
//     }
//     setBrand(brand){
//         this.#brand = brand;
//     }
    
// }
// const car = new Car;
// // console.log(car.name);
// car.setBrand("blblbla");
// console.log(car.getBrand());
////////////////////////////////////////////
// function sum(num1, num2){
//     return num1+ num2;
// }

// function sum(num1, num2){
//     let result =num1+ num2;
//     return `this is ${result}`;
// }
// console.log(sum(5, 7)); // override

// overload
// function sum(num1, num2){
//     return num1+ num2;
// }
// console.log(sum(5, 7)); // 12

// function sum(num1, num2 , num3){
//     let result =num1+ num2 + num3;
//     return `this is ${result}`;
// }
// console.log(sum(5, 7 , 11)); //23

////////////////////////////////////////////////////
// polymorphism

// class User{
//     status = true;
//     constructor(fname, id){
//         this.fname = fname;
//         this.id = id;
//     }
//     createProfile(){
//         console.log("create profile ")
//     }
//     updateProfile(){
//         console.log("update profile " + this.fname)
//     }
// }
// class Admin extends User{
//      createProfile(){
//         console.log("create Admin profile ");
//     }
// }
// const admin = new Admin("mohamed" , 10);
// admin.createProfile();

// circle, rect, square ---> inheritance, poly.
// abstract class car{
//     side;
//     area();
//     perimeter();
// }
// SOLID Principle --> OOP

