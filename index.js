const menuShow = document.querySelector(".respnav-btn-show");
const menuClose = document.querySelector(".respnav-btn-close");
const menuBkg = document.querySelector(".respnav-bkg");
menuShow.addEventListener("click", function(){
    menuBkg.style.display = "block";
    menuShow.style.display = "none";
    menuClose.style.display = "block";
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

const avisoClose = document.querySelector(".aviso-close");
const Aviso = document.querySelector(".aviso")
avisoClose.addEventListener("click", function(){
    Aviso.style.display = 'none';
});


  //Classes que redirecionam
const classes = ['Flamengo', 'Nirvana', 'Japão', ' Calça Jooger Nike', 'Polo Nike', 'Vestido Colado', 'Vestido Azul', 'Bermuda Adidas'];

const searchInput = document.getElementById('search');
const suggestionsContainer = document.getElementById('suggestions');

 
searchInput.addEventListener('input', function() {
    const searchString = this.value.toLowerCase();
    const filteredClasses = classes.filter(className =>
      className.toLowerCase().includes(searchString)
    );

if (filteredClasses.length > 0 && searchString !== '') {
      suggestionsContainer.innerHTML = '';
      filteredClasses.forEach(className => {
        const link = document.createElement('a');
        link.href = `#${className}`;
        link.textContent = className;
        suggestionsContainer.appendChild(link);
      });
      suggestionsContainer.style.display = 'block';
    } else {
      suggestionsContainer.style.display = 'none';
    }
  });

suggestionsContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      const targetSection = document.getElementById(event.target.textContent);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
      suggestionsContainer.style.display = 'none';
    }
  });