function setLanguage(lang) {
    if (lang === "en") {
        // Hero
        document.getElementById("hero-title").innerHTML = "HELICES CICLON";
        document.getElementById("hero-subtitle").innerHTML = "Wooden Propellers for Ultralight and Experimental Aircraft";
        document.getElementById("hero-text").innerHTML = "Manufacturing and specialized support.";
        document.getElementById("hero-text2").innerHTML = "Manufactured to rigorous technical standards for ultralight and experimental aircraft applications.";
        document.getElementById("hero-btn").innerHTML = "Request Information";

        // Características (3 Bloques)
        document.getElementById("fabricacion-title").innerHTML = "Manufacturing";
        document.getElementById("fabricacion-text").innerHTML = "Manufacture of wooden propellers for ultralight and experimental aircraft, designed to deliver performance, reliability and quality workmanship.";
        document.getElementById("soporte-title").innerHTML = "Technical Support";
        document.getElementById("soporte-text").innerHTML = "Technical assistance and guidance in propeller selection and operation for different aircraft and engine configurations.";
        document.getElementById("calidad-title").innerHTML = "Technical Standards";
        document.getElementById("calidad-text").innerHTML = "Optimized aerodynamic design with selected premium woods, ensuring perfect balancing and peak durability in flight.";

        // Testimonios
        document.getElementById("testimonials-main-title").innerHTML = "Pilots' Feedback";
        document.getElementById("t1-text").innerHTML = '"Excellent performance on my experimental aircraft. Thrust improved noticeably compared to my previous propeller."';
        document.getElementById("t2-text").innerHTML = '"The technical support helped me choose the exact pitch for my Rotax engine. Flawless and very professional service."';
        document.getElementById("t3-text").innerHTML = '"Perfect finishes and an extremely smooth ride with zero vibrations. Highly recommended."';

        // Traducción de Placeholders
        document.getElementById("form-name").placeholder = "Name";
        document.getElementById("form-email").placeholder = "Email Address";
        document.getElementById("form-phone").placeholder = "Phone Number";
        document.getElementById("form-message").placeholder = "Your Message";
        document.getElementById("submit-btn").innerHTML = "Send";

        // Contacto
        document.getElementById("contact-title").innerHTML = "Contact";
        document.getElementById("info-title").innerHTML = "Contact Info";

        // Footer
        document.getElementById("footer-text").innerHTML = "© 2026 HELICES CICLON. All Rights Reserved.";
    } else {
        // Recarga la página para volver al español original
        location.reload();
    }
}
