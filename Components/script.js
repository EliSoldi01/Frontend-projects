const toggleBtn = document.querySelector(".toggle-btn"), 
iconLock = document.querySelector(".icon i");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");

    if(toggleBtn.classList.contains("active")) {
        return iconLock.classList.replace("bxs-lock-open", "bxs-lock");
    }   

    iconLock.classList.replace("bxs-lock", "bxs-lock-open");
});

