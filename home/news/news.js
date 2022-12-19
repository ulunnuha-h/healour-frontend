let arrow = document.getElementsByClassName("arrow-button");
let bullet = document.getElementsByClassName("bullet");
let news = document.getElementsByClassName("news-popular");
const imgSrc = ["../../assets/news1.jpg","../../assets/bromo 4.jpg","../../assets/landing-bg.jpg","../../assets/login-bg.jpg"]
let idx = 0;

const moveLeft = () => { 
    if(idx > 0) {
        idx--; 
        return true;
    }
    else return false
}
const moveRight = () => { 
    if(idx < 3) {
        idx++; 
        return true;
    }
    else return false;
}
const checkIndex = () => {
    news[0].children[0].classList.remove("animate");
    if(idx == 0){
        arrow[0].src = "./icons/left.svg";
    }
    else{
        arrow[0].src = "./icons/left-active.svg";
    }

    if(idx == 3){
        arrow[1].src = "./icons/right.svg";
    }
    else{
        arrow[1].src = "./icons/right-active.svg";
    }

    for (let i = 0; i < 4; i++) {
        if(i == idx){
            bullet[i].classList.add("active");
        }
        else{
            bullet[i].classList.remove("active");
        }
    }

    news[0].children[0].src = imgSrc[idx];
    setTimeout(()=>{
        news[0].children[0].classList.add("animate");
    },100);
    
}

arrow[0].addEventListener("click",()=>{
    if(moveLeft()){
        checkIndex();
    }
})

arrow[1].addEventListener("click",()=>{
    if(moveRight()){
        checkIndex();
    }
})

for (let i = 0; i < 4; i++) {
    bullet[i].addEventListener("click",()=>{
        idx = i;
        checkIndex();
    })
}



console.log();
// news[0].children