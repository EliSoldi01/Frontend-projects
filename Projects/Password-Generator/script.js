const passwordInput = document.querySelector(".password-box input"),
copyIcon = document.querySelector(".password-box .copy-icon"),
rangeSlider = document.querySelector(".range-box input"),
sliderNumber = document.querySelector(".range-box .slider-number"),
generateButton = document.querySelector(".generate-button");

let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890^!$%&|[](){}:;.,*+-#@<>";

const generatePassword = () => {
    let newPassword = "";

    for(let i = 0; i < rangeSlider.value; i++){
        let randomNumber = Math.floor(Math.random() * allCharacters.length);
        newPassword += allCharacters[randomNumber];
    }

    passwordInput.value = newPassword;
    copyIcon.classList.replace("bx-check", "bx-copy");
}

copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.classList.replace("bx-copy", "bx-check");
})

rangeSlider.addEventListener("input", () => {
    sliderNumber.innerText = rangeSlider.value;
    generatePassword();
})

generateButton.addEventListener("click", generatePassword);
