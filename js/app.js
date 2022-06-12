let clicked = false;

function activeMenu() {
    let nav = document.getElementById("nav");
    let button = document.querySelector(".menu-button");

    if(!clicked){
        nav.classList.add("active");
        button.classList.add("clicked");
        clicked = true;
    } else {
        nav.classList.remove("active");
        button.classList.remove("clicked");
        clicked = false;
    }
}