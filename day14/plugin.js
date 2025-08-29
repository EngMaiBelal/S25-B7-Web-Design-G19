/////////////////////////////////////////
// bom
// window 
// innerHeight, innerWidth, open(), close(), resize(), moveTo()
////////////////////////////////////////
// location

// window.location.href returns the href (URL) of the current page
// window.location.hostname returns the domain name of the web host
// window.location.pathname returns the path and filename of the current page
// window.location.protocol 

// function openWin(){
//     // window.open("../day13/welcome.html","_self");
//     // let x = window.open("","", "width= 200, height= 200, left= 200, top= 200");
//     window.location.assign("../day13/welcome.html"); // still exist in history
//     // window.location.replace("../day13/welcome.html"); // remove from history
// }

//////////////////////////////////////////////
// history

// function backStep(){
//     // window.history.back();
//     // history.back();
//     history.go(-2);
// }
// function forwardStep(){
//     // window.history.back();
//     // history.forward();
//     history.go(2);
// }
/////////////////////////////////////
// timing
// let handler1 = setTimeout(sum, 3000, 5, 10);
// let handler2 = setTimeout(test, 5000);
// console.log(handler1)
// console.log(handler2)

// function sum(num1, num2){
//     console.log( num1 + num2);
// }

// function test(){
//     console.log("hello");
// }
// function clearTime(){
//     clearTimeout(handler2);
// }


// setInterval(getTime, 1000);
// function getTime(){
//     let par = document.getElementById("demo");
//     let date = new Date();
//     par.textContent = date.toLocaleTimeString();
// }


// counter ---> observe section 0 --> 100
// btn up
// let upBtn = document.getElementById("upBtn");
// window.onscroll = function(){
//     if(window.scrollY >= (window.innerHeight / 3)){
//         upBtn.style.display ="block";
//     }else{
//         upBtn.style.display ="none";
//     }
// }
// upBtn.addEventListener("click", function(){
//     // window.innerHeight = 0;
//     window.scrollTo({
//         left:0,
//         top:0,
//         behavior: "smooth"
//     });
// })

















// cookie 
// session
// localstorage // dark mode

// // database, file system

// throw error


//returns the total height of the user's screen.
// screen.height 
//returns the height of the user's screen minus interface features like the Windows Taskbar.
// screen.availHeight 
//returns the total height of the user's screen.
// window.innerHeight


// let products = [
//     {
//        id : 15,
//        fname: "omer" 
//     },
//     {
//        id : 16,
//        fname: "mai" 
//     },
//     {
//        id : 17,
//        fname: "ahmed" 
//     },
// ]
///////////////////////////////////////////////////////
// Storage

// sessionStorage -->reload tab, the same tab
// function setStorage(){
//     sessionStorage.setItem("color", "red");
// }
////////////////////////////////////////////////////

// localStorage --> reload another tab in the same browser
function setStorage(){
    localStorage.setItem("color", "red");
    localStorage.setItem("bg", "black");
}
console.log(localStorage.getItem('color'));
btnClear.addEventListener("click", function(){
    localStorage.removeItem('color');
})
btnClearAll.addEventListener("click", function(){
    localStorage.clear();
})