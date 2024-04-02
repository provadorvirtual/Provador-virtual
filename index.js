//BD firebase 
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyANoj1dFcRg_AkkRN8XGTPeXsgnRJRCfN0",
    authDomain: "provador-v.firebaseapp.com",
    databaseURL: "https://provador-v-default-rtdb.firebaseio.com",
    projectId: "provador-v",
    storageBucket: "provador-v.appspot.com",
    messagingSenderId: "798514586212",
    appId: "1:798514586212:web:225b4bd9ea03ba3e52b571",
    measurementId: "G-L6Q0P31LLS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

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