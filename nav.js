let login = document.getElementsByClassName("login");
let logout = document.getElementsByClassName("logout");

window.addEventListener("load",()=>{
    if(localStorage.getItem("login") == "1"){
        for (let i = 0; i < login.length; i++) {
            login[i].style.display = "block"
        }

        for (let i = 0; i < logout.length; i++) {
            logout[i].style.display = "none"
        }
    }
    else{
        for (let i = 0; i < login.length; i++) {
            login[i].style.display = "none"
        }

        for (let i = 0; i < logout.length; i++) {
            logout[i].style.display = "block"
        }
    }
})

login[1].children[2].children[1].children[0].addEventListener("click",()=>{
    localStorage.removeItem("login");
    window.location = "/";
})