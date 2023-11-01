
const btnazul = document.querySelector(".cdcheck1");
const btnverde = document.querySelector(".cdcheck2");

const UserForm = document.querySelector(".userform");
const LojaForm = document.querySelector(".lojistaform");


btnverde.addEventListener("click", function(){
    btnazul.style.background === "rgb(84, 242, 84)" ? btnazul.style.background = "rgb(21, 68, 255)" :  btnazul.style.background = "rgb(21, 68, 255)";
    btnverde.style.background === "rgb(21, 68, 255)" ? btnverde.style.background = "rgb(84, 242, 84)" : btnverde.style.background = "rgb(84, 242, 84)"
    UserForm.style.display === "block" ? UserForm.style.display = "none" : LojaForm.style.display = "block";
    LojaForm.style.display === "none" ? LojaForm.style.display = "block": UserForm.style.display = "none";

});

btnazul.addEventListener("click", function(){
    btnverde.style.background === "rgb(84, 242, 84)" ? btnverde.style.background = "rgb(21, 68, 255)" : btnverde.style.background = "rgb(84, 242, 84)";
    btnazul.style.background === "rgb(21, 68, 255)" ? btnazul.style.background = "rgb(84, 242, 84)" :  btnazul.style.background = "rgb(21, 68, 255)";
    UserForm.style.display === "none" ? UserForm.style.display = "block" : LojaForm.style.display = "none";
    LojaForm.style.display === "block" ? LojaForm.style.display = "none": UserForm.style.display = "block";
}); 
rgb(21, 68, 255)
rgb(84, 242, 84)