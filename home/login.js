let input = document.getElementsByClassName("text-field");
let email ="";
let pass ="";

input[0].children[1].addEventListener('change',()=>{
    email = input[0].children[1].value;
})

input[1].children[1].addEventListener('change',()=>{
    pass = input[1].children[1].value;
})

const form = document.getElementsByTagName("form")[0];
console.log(form);

form.addEventListener("click",(e)=>{
    e.preventDefault();
    if(email == "ulunnuha@gmail.com" && pass == "imk123"){
        console.log("login");
        localStorage.setItem("login","1");
        window.location = "/home/profile/edit.html";
    }
    else {
        console.log("salah");
    }
})