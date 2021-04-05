//retrieve relevant selectors /variables
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

//click to switch the slider left or right to play or pause the video
btn.addEventListener("click", () => { 
    if (!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        video.pause()
    } else {
        btn.classList.remove("slide");
        video.play();
    }
});


const preloader = document.querySelector(".preloader");

//on window load hide the preloader
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
