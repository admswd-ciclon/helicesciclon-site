function setLanguage(lang){

if(lang==="en"){

document.getElementById("hero-title").innerHTML="HELICES CICLON";

document.getElementById("hero-subtitle").innerHTML=
"Wooden Propellers for Ultralight and Experimental Aircraft";

document.getElementById("hero-text").innerHTML=
"Manufacturing and specialized support.";

document.getElementById("hero-text2").innerHTML=
"Manufactured to rigorous technical standards for ultralight and experimental aircraft applications.";

document.getElementById("fabricacion-title").innerHTML=
"Manufacturing";

document.getElementById("fabricacion-text").innerHTML=
"Manufacture of wooden propellers for ultralight and experimental aircraft, designed to deliver performance, reliability and quality workmanship.";

document.getElementById("soporte-title").innerHTML=
"Technical Support";

document.getElementById("soporte-text").innerHTML=
"Technical assistance and guidance in propeller selection and operation for different aircraft and engine configurations.";

document.getElementById("contact-title").innerHTML=
"Contact";

document.getElementById("footer-text").innerHTML=
"© 2026 Helices Ciclon. All Rights Reserved.";

}

else{

location.reload();

}

}