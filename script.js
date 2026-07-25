const translations = {
  es: {
    country: "Diseñadas y fabricadas en Argentina",
    navBenefits: "Ventajas",
    navProcess: "Proceso",
    navContact: "Contacto",
    request: "Solicitar información",
    heroEyebrow: "Precisión artesanal · Teodelina, Santa Fe",
    heroTitle: "Hélices de madera para su avión",
    heroLead: "Fabricación y soporte especializado. Fabricadas bajo estrictos estándares técnicos para aeronaves ultralivianas y experimentales.",
    seeProcess: "Conocer el proceso",
    benefitsTitle: "Diseñadas para volar",
    benefit1Title: "Fabricación especializada",
    benefit1Text: "Fabricación de hélices de madera para aeronaves ultralivianas y experimentales, desarrolladas para ofrecer rendimiento, confiabilidad y calidad constructiva.",
    benefit2Title: "Estándares técnicos",
    benefit2Text: "Diseño aerodinámico optimizado con maderas seleccionadas de alta calidad, asegurando un balanceado perfecto y máxima durabilidad en vuelo.",
    benefit3Title: "Soporte técnico",
    benefit3Text: "Asistencia técnica y acompañamiento para la selección y utilización de hélices para distintas configuraciones de aeronaves y motorizaciones.",
    processEyebrow: "Del taller al vuelo",
    processTitle: "Un proceso cuidado en cada etapa",
    step1: "Relevamiento",
    step2: "Fabricación",
    step3: "Balance y acabado",
    contactEyebrow: "Consulta técnica",
    contactTitle: "Cuéntenos sobre su aeronave",
    contactLead: "Envíenos los datos de su configuración y nos pondremos en contacto para orientarlo.",
    whatsapp: "Consultar por WhatsApp",
    emailButton: "Enviar un email",
    nameLabel: "Nombre",
    aircraftLabel: "Aeronave / Motor",
    messageLabel: "Mensaje",
    send: "Enviar consulta",
    qrLabel: "Escanee para guardar el contacto"
  },
  en: {
    country: "Designed and manufactured in Argentina",
    navBenefits: "Benefits",
    navProcess: "Process",
    navContact: "Contact",
    request: "Request information",
    heroEyebrow: "Craft precision · Teodelina, Santa Fe",
    heroTitle: "Wooden propellers for your aircraft",
    heroLead: "Manufacturing and specialized support. Manufactured to rigorous technical standards for ultralight and experimental aircraft applications.",
    seeProcess: "Explore the process",
    benefitsTitle: "Designed to fly",
    benefit1Title: "Specialized manufacturing",
    benefit1Text: "Wooden propellers for ultralight and experimental aircraft, developed to deliver performance, reliability and quality workmanship.",
    benefit2Title: "Technical standards",
    benefit2Text: "Optimized aerodynamic design with selected premium woods, ensuring perfect balancing and peak durability in flight.",
    benefit3Title: "Technical support",
    benefit3Text: "Technical assistance and guidance in propeller selection and operation for different aircraft and engine configurations.",
    processEyebrow: "From workshop to flight",
    processTitle: "Care at every stage",
    step1: "Assessment",
    step2: "Manufacturing",
    step3: "Balance and finish",
    contactEyebrow: "Technical inquiry",
    contactTitle: "Tell us about your aircraft",
    contactLead: "Send us your configuration details and we will contact you with guidance.",
    whatsapp: "Ask on WhatsApp",
    emailButton: "Send an email",
    nameLabel: "Name",
    aircraftLabel: "Aircraft / Engine",
    messageLabel: "Message",
    send: "Send inquiry",
    qrLabel: "Scan to save our contact"
  }
};

function setLanguage(language) {
  const selected = translations[language] ? language : "es";
  document.documentElement.lang = selected;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[selected][key]) element.textContent = translations[selected][key];
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === selected;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("helices-ciclon-language", selected);
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage(localStorage.getItem("helices-ciclon-language") || "es");
