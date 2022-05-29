let clicked = true;

function activeMenu() {
    let nav = document.getElementById("nav");
    let link = document.querySelector(".menu-nav");

    if(clicked){
        nav.classList.add("active");
        setTimeout(() => {link.classList.add("active");}, 200);
        clicked = false;
    } else if(!clicked) {
        link.classList.remove("active");
        setTimeout(() => {nav.classList.remove("active");}, 200);
        clicked = true;
    }
    else {
        console.log("Error XXX The Menu Is Not Working!");
    }
}