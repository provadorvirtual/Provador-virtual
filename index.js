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

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("#searchInput");
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName("rp");
    li = ul.getElementsByClassName("prod");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}