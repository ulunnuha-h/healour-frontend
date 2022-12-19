let nav = document.getElementsByTagName("nav")[0];
let pop = document.getElementsByClassName("card-popular");
let inputSearch  = document.getElementById("search-tour");
let heroInfo = document.getElementsByClassName("hero-info")[0];

for (let i = 0; i < heroInfo.children.length; i++) {
    setTimeout(()=>{
        heroInfo.children[i].classList.add("animate-left");
    },i*150);   
}

document.addEventListener("scroll",()=>{
    if(window.scrollY > inputSearch.scrollHeight){
        nav.classList.remove("scroll");
    }
    else{
        nav.classList.add("scroll");
    }

    for (let i = 0; i < pop.length; i++) {
        if(window.scrollY > pop[i].scrollHeight){
            pop[i].classList.add("active");
        }        
    }
})

