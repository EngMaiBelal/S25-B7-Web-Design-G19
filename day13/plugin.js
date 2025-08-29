//////////////////////////////////
// number methods
// let x = "ahmed";
// let y = 1238;

// console.log(Number.isNaN(x))
///////////////////////////////////////////
// DOM
// how to access element documentation
//////////////////////
// let header = document.getElementById("mainHeader"); // element
// let pars = document.getElementsByTagName("p"); // htmlcollections
// let headers = document.getElementsByTagName("h2");
// let myPars = document.getElementsByClassName("par");
// let myPars = document.querySelectorAll(".par"); //NodeList
// let myPar = document.querySelector(".par"); // first element
// let header = document.querySelector("#mainHeader"); // first element
// console.log(header);
// console.log(pars[0]); // html collections
// console.log(myPars); // html collections
// console.log(headers); // html collections
// console.log(mainHeader);
// console.log(myPars[2]); 
/////////////////////////////////////////////
// changing html elements
// https://www.w3schools.com/jsref/prop_node_textcontent.asp
// let header = document.getElementById("mainHeader");
// header.innerHTML ="Javascript";
// header.textContent ="<h1> nnnnnnnnnnnnn</h1>";

// header.innerHTML= "<h1> nnnnnnnnnnnnn</h1>"
// console.log(demo.innerHTML);
// console.log(demo.innerText);
// console.log(demo.textContent);
// const link = document.querySelector("#demo a");
// link.target = "_self";
// link.setAttribute("target", "_self")
// link.setAttribute("name", "sd")
// console.log(link.target)

// header.style.color = "red";
// classlist

///////////////////////////////////////
// events
//2
// function changeContent(x){
//     x.innerHTML = "blablabla";
// }
//3
// header.onclick = function(){
//     header.innerHTML = "blablabla";
// }

// header.onclick = test;
// function test(){
//     header.innerHTML = "blablabla";
// }


// header.addEventListener("click", function(){
//     /// code
// })

// header.addEventListener("click", test);
// header.addEventListener("click", test2);

// function test(){
//     header.innerHTML = "blablabla";
//     header.setAttribute("name" , "mohamed")
// }

// function test2(){
//     header.style.color = "red";
// }

// header.onclick = test;
// header.onclick = test2;

// function test(){
//     header.innerHTML = "blablabla";
//     header.setAttribute("name" , "mohamed")
// }

// function test2(){
//     header.style.color = "red";
// }
/////////////////////////////////////////
// add, remove element
// let section = document.getElementById("sec1");
// function addImage(){
//     // sec1.innerHTML = `<img src='f1.png'>`;
//     let newImage = document.createElement("img");
//     newImage.src ="f1.png";
//     // section.prepend(newImage); // first child
//     section.append(newImage);  // last child
//     // section.before(newImage); // sibling
//     // section.after(newImage);
//     // document.body.append(newImage);
// }
// document.getElementById("remBtn").addEventListener("click", removeElement)
function removeElement(){
    // console.log(section.firstElementChild); // h2
    // console.log(section.lastElementChild)
    // console.log(section.firstChild) // space, comments
    // console.log(section.lastChild)
    // section.firstElementChild.remove();
    // section.children[0].remove();
    // x.remove();
    // console.log(section.nextSibling)
    // console.log(section.nextElementSibling)
    //  console.log(section.previousSibling);
    // console.log(section.previousElementSibling);
    // console.log(document.body)
}

// copy element
// document.getElementById("btn").onclick = copyPar;
// let oldPar = document.querySelector("#p1");
// function copyPar(){
//     let newPar = oldPar.cloneNode(true);
//     newPar.id="kkkk";
//     document.body.prepend(newPar);
// }

// secTest.style.color ="red"
// function addStyle(){

//     secTest.classList.remove("sec-custome");
//     secTest.classList.add("active");
// }

///////////////////////////////////////
// form validation
// console.log(document.forms[0]);
// console.log(document.forms["myForm"])

let form = document.forms["myForm"];
form.addEventListener("submit" , function(event){
    // console.log(event);
    let fname = form["fname"].value.trim();
    let email = form["email"].value.trim();
    let password = form["password"].value.trim();
    // phone egypt , password--> required
    // 3 < name < 20
    let patternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // console.log(fname, password, email);

    if(fname === "" || fname.length < 3){
        event.preventDefault();
        // alert("please Enter your name");
        swal({
            title: "faild login",
            text: "please Enter Your Name!",
            icon: "error",
        });
        return;
    }

    if(! patternEmail.test(email) || email === ""){
        event.preventDefault();
        alert("please Enter your email");
        return;
    }
    
    event.preventDefault();
    swal({
            title: "Welcome",
            text: "please Enter Your Name!",
            icon: "success",
    });

});

// sweet alert









