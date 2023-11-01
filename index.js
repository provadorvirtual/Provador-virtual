const menuShow = document.querySelector(".respnav-btn-show");
const menuClose = document.querySelector(".respnav-btn-close");
const menuBkg = document.querySelector(".respnav-bkg")
menuShow.addEventListener("click", function(){
    menuBkg.style.display = "block";
    menuShow.style.display = "none";
    menuClose.style.display = "block"
});
menuClose.addEventListener("click", function(){
    menuBkg.style.display = "none";
    menuShow.style.display = "block";
    menuClose.style.display = "none";
});

const bellring = document.querySelector(".vst")
const audio1 = document.querySelector(".bell")
bellring.addEventListener("click", function(){
    audio1.play()
});

const bolhasong = document.querySelector(".lp")
bolhasong.addEventListener("click", function(){
    const audio2 = document.querySelector(".bolha")
    audio2.play()
});
