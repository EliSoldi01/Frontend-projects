const toggleBtn = document.querySelector(".toggle-btn");
const button = document.querySelector(".button-sun");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    document.body.style.background = "#455052";
    if(toggleBtn.classList.contains("active")){
        return button.classList.replace("button-sun", "button-moon");
    }

    button.classList.replace("button-moon", "button-sun");
    
})