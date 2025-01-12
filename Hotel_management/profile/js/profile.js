//global variable declaration

let userinfo;
let navBrand = document.querySelector(".navbar-brand");
let logoutBTn= document.querySelector('.logout-btn');

let bookingForm = document.querySelector(".booking-form");
let allbinput = bookingForm.querySelectorAll("input");
console.log(allbinput);





//check user is logged in or not
//only then the profile page will open
if(sessionStorage.getItem("__au__")==null){
    window.location = "../index.html";
    

}
userinfo = JSON.parse(sessionStorage.getItem("__au__"));
navBrand.innerHTML = userinfo.hotel;

//logout
logoutBTn.onclick =()=>{
    logoutBTn.innerHTML= "Please Wait..";
    setTimeout(()=>{
        logoutBTn.innerHTML= "Logout";
        sessionStorage.removeItem("__au__");
        window.location = '../index.html';
    },3000)
}
//start booking code
