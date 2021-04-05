//the DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waititng for stylesheets, images and subframes to finish loading

//The load event is fired when the whole page has loaded, including all depenfent resources such a stylesheets and images;so in this case we use the load event on the preload

//retrieve relevant selectors /variables
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");


//behave like toggle; if the classlist has doesn not have slide add it and pause, else remove it and play

//the reason for not using the toggle method is so to be able to add the play and pause functionality

btn.addEventListener("click", () => { 
    if (!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        video.pause()
    } else {
        btn.classList.remove("slide");
        video.play();
    }
});

// play and pause are video inbuilt fxns

const preloader = document.querySelector(".preloader");

//so call the load event instead. you can watch in chrome network, looking at the moments it loads
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});