const downloadBtn = document.querySelector(".download-btn");
/* const linkFile = ""; */

const initTimer = () => {

    if(downloadBtn.classList.contains("disable-timer")){
        /*return location.href = linkFile;*/
        return console.log("File downloaded");
    }

    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    
    downloadBtn.innerHTML = 'Your file will download in <b> ' + timer + ' </b> seconds';

    const initCounter = setInterval(() => {
        if(timer > 0){
            timer--;
            return downloadBtn.innerHTML = 'Your file will download in <b> ' + timer + ' </b> seconds';
        }
        clearInterval(initCounter);
        console.log("File downloaded");
        /*location.href = linkFile;*/
        downloadBtn.innerHTML = 'Your file is downloading...';

        setTimeout(() => {
            downloadBtn.classList.replace("timer", "disable-timer");
            downloadBtn.innerHTML = "<span class='icon'><i class='bx bxs-download'></i></span><span class='text'>Download again</span>"
        }, 3000);

    }, 1000);
};

downloadBtn.addEventListener("click", initTimer);