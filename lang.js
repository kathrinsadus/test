const translations = {
    en: {
      location: "Location",
      info: "Information",
      schedule: "",
      team: "Team",

      "welcome-heading": "Hi, welcome!",
      "welcome-text": "We are so happy you're coming to our wedding...",
      "location-heading": "Where should you go?",
    },
    de: {
      location: "Location",
      info: "Wissenswertes",
      schedule: "Ablauf",
      team: "Team",
      "welcome-heading": "Hallo, willkommen!",
      "welcome-text": "Wir freuen uns sehr, dass du zu unserer Hochzeit kommst! Diese Website hält nützliche Informationen bereit und wird auch entsprechen geupdated. Falls ihr Fragen haben solltet meldet euch gerne bei uns. Wir können es kaum erwarten!",
      "location-heading": "Wo müsst ihr hin?",
    },
    pl: {
      location: "Lokalizacja",
      info: "Informacje",
      schedule: "?",
      Team: "Team",
      "welcome-heading": "Cześć, witaj!",
      "welcome-text": "Cieszymy się, że przyjeżdżasz na nasze wesele...",
    }
  };
  
  function setLanguage(lang) {
    localStorage.setItem("lang", lang); // store selected language
  
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach(el => {
      const key = el.getAttribute("data-key");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  
    // Update internal nav links so they keep working properly
    document.querySelectorAll("a[data-nav]").forEach(link => {
      const href = link.getAttribute("href").split("?")[0]; // remove query
      link.setAttribute("href", href);
    });
  }
  
  function switchLanguage(lang) {
    setLanguage(lang);
  }