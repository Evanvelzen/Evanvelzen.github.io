console.log("main.js loaded");

//Queryselectors are used in order to verify login data and for the system to work.
const usernameEntered = document.querySelector(".username");
const passwordEntered = document.querySelector(".password");
const button = document.querySelector("button");

//Constant veriable's are stored here and used to verify entered information.
const password1 = "JJ2023"
const password2 = "GrijzeJager#$!!"
const username1 = "janjuluis"
const username2 = "wilverdrag"


//The Eventlistener is used to activate the verification progress.
button.addEventListener('click', checkLoginInfo)

const localstorage = window.localStorage.getItem('token');

if (localstorage == "panzergranate 39") {
    window.location.href = ('home.html');
}
//Here is the function that verifies the entered information.
function checkLoginInfo() {

    //The system Checks first the username with an IF statement. 
    //If no valid username is found an alert will be displayed.
    //Afterwards it checks the password that belongs to the username. 
    //If not correct it will display an alert. if correct it will send the person to the homepage.
    if (usernameEntered.value == username1) {
        if (passwordEntered.value == password1) {
            window.location.href = ('home.html');

            window.localStorage.setItem('token', 'panzergranate 39');
        } else { alert("het wachtwoord is incorrect") }
    } else if (usernameEntered.value == username2) {
        if (passwordEntered.value == password2) {
            window.location.href = ('home.html');

            window.localStorage.setItem('token', 'panzergranate 39');
        } else { alert("het wachtwoord is incorrect") }

    } else {
        alert("username is incorrect")
    }
}
