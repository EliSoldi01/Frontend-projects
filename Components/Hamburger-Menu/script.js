const menu_btn = document.querySelector(".menu-btn");

let menu_status = false;

menu_btn.addEventListener("click", () => {
    if(!menu_status){
        menu_btn.classList.add("open");
        menu_status = true;
    }
    else {
        menu_btn.classList.remove("open");
        menu_status = false;
    }
})