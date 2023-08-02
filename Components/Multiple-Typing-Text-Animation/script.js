const text = document.querySelector(".dynamic");

const textList = ["Bioengineer student", "Life-long learner", "Martial artist", "Sensitive person"];

let i = 1;
let textLoad = () => {
        text.textContent = textList[0];
        setInterval(() => {
            text.textContent = textList[i];
            i++;

            if(i >= textList.length){
                i = 0;
                clearInterval();
                return;
            }

        }, 4000);
}

textLoad();



