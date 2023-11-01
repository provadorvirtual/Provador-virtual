const enviar = document.querySelector(".enviarbtn")
enviar.addEventListener("click", function(){
    const audio = document.querySelector("audio")
    audio.play()
});


const Codigo = document.querySelector(".show");
const Desocultar = function(){
    Codigo.style.display === "block" ? Codigo.style.display = "block": Codigo.style.display = "block";
};