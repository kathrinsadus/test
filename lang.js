// -----------------------------
// Language pack
// -----------------------------
const translations = {
  de: {
    // nav
    home: "Home",
    info: "Wissenswertes",
    schedule: "Ablauf",
    team: "Team",

    // welcome (falls auf Startseite genutzt)
    "welcome-heading": "Hallo, willkommen!",
    "welcome-text":
                    `Wir freuen uns sehr, dass du am 18. April 2026 mit uns feiern wirst.<br>
                    Auf dieser Website findest du alle wichtigen Informationen: vom Ablauf über die Location bis zu Anreise- und Übernachtungsmöglichkeiten.
                    Schau also gerne immer mal wieder vorbei.
                    Und falls du Fragen hast, melde dich einfach bei uns, wir helfen gerne weiter.<br>
                    Wir können es kaum erwarten, unsere Hochzeit mit euch zu feiern!<br><br>
                    <b>Eure Mäuse, Kathrin & Fabian</b>`,
    // location page
    "location-heading": "Wo müsst ihr hin?",
    "location-description": `Die Adresse lautet:<br>
    Außerhalb 1 <br>
    69239 Neckarsteinach <br><br>
    Ihr könnt euch die <a class=intext_link href="https://tour.hoher-darsberg.de/">Location </a>vorab gerne einmal ansehen.<br>`,
    "location-car-heading": "Anreise mit dem Auto<br>",
    "location-car":
    `Gebt im Navi als Ziel am <b>besten Darsbergerstraße 127</b> ein.
      Die Einfahrt befindet sich auf der linken Seite. Es stehen reichlich Parkplätze zur Verfügung.
      Die Location bietet außerdem Schlafplätze an. Falls ihr gerne über Nacht bleiben möchtet, gebt uns bitte über die Umfrage Bescheid, damit wir entsprechend planen können.`,
    "location-bus-heading": "Anreise mit der Bahn<br>",
    "location-bus":
      "Wenn ihr mit den öffentlichen Verkehrsmitteln anreisen wollt, könnt ihr die S-Bahnen (S1 und S2) nach Neckarsteinach nehmen. Gebt uns gerne Bescheid, damit wir euch helfen können, komfortabel zur Location zu kommen."
  },

  en: {
    // nav
    home: "Home",
    info: "Information",
    schedule: "Schedule",
    team: "Team",

    // welcome
    "welcome-heading": "Hi, welcome!",
    "welcome-text":
      "We are so happy you're coming to our wedding! This website will keep useful info and updates. If you have any questions, feel free to contact us. We can't wait!",

    // location page
    "location-heading": "Where should you go?",
    "location-description": `The address is:<br>
      Außerhalb 1<br>
      69239 Neckarsteinach
      <a href="https://tour.hoher-darsberg.de/" target="_blank" rel="noopener">Here</a> you can also check out the venue.<br><br>`,
    "location-car-heading": "Arrival by car<br>",
    "location-car":
      "Enter Darsbergerstr. 127 into your GPS. You'll see the entrance on the left. There will be plenty of parking spaces. The venue also offers sleeping places—if you'd like to stay overnight, please let us know via the survey.",
    "location-bus-heading": "Arrival by train<br>",
    "location-bus":
      "You can take the S-Bahn (S1 or S2) to Neckarsteinach. Let us know and we’ll help you get to the venue comfortably."
  },

  pl: {
    // nav
    home: "Strona główna",
    info: "Informacje",
    schedule: "Plan",
    team: "Zespół",

    // welcome
    "welcome-heading": "Cześć, witaj!",
    "welcome-text":
      "Bardzo się cieszymy, że przyjedziesz na nasze wesele! Ta strona zawiera przydatne informacje i aktualizacje. Jeśli masz pytania, daj nam znać!",

    // location page
    "location-heading": "Dokąd powinniście iść?",
    "location-description": `Adres:<br>
      Außerhalb 1<br>
      69239 Neckarsteinach
      <a href="https://tour.hoher-darsberg.de/" target="_blank" rel="noopener">Tutaj</a> możecie obejrzeć miejsce.<br><br>`,
    "location-car-heading": "Dojazd samochodem<br>",
    "location-car":
      "Wpisz w nawigację Darsbergerstr. 127. Wjazd będzie po lewej stronie. Na miejscu jest dużo miejsc parkingowych. Obiekt oferuje też noclegi — jeśli chcesz zostać na noc, daj znać w ankiecie.",
    "location-bus-heading": "Dojazd koleją<br>",
    "location-bus":
      "Możecie dojechać kolejką S-Bahn (S1 lub S2) do Neckarsteinach. Dajcie nam znać, a pomożemy wygodnie dotrzeć na miejsce."
  }
};

// -----------------------------
// Helpers
// -----------------------------
const DEFAULT_LANG = "de";
const SUPPORTED = Object.keys(translations);

function normalizeLang(lang) {
  return SUPPORTED.includes(lang) ? lang : DEFAULT_LANG;
}

function setLanguage(lang) {
  const chosen = normalizeLang(lang);
  localStorage.setItem("lang", chosen);

  // reflect on <html lang="…">
  document.documentElement.setAttribute("lang", chosen);

  // replace all elements with data-key
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    const t = translations[chosen]?.[key];

    if (t === undefined || t === null) {
      // no translation -> leave original content
      return;
    }

    // Allow HTML in translations (for <br>, links, etc.)
    el.innerHTML = t;
  });

  // (Optional) highlight active flag if flags have data-lang attributes
  document.querySelectorAll(".language-selector [data-lang]").forEach((img) => {
    img.toggleAttribute("aria-current", img.getAttribute("data-lang") === chosen);
  });
}

function switchLanguage(lang) {
  setLanguage(lang);
}

// auto-init on load
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang") || DEFAULT_LANG;
  setLanguage(saved);

  // If you prefer not to use inline onclick="" on the flags,
  // you can attach listeners here (requires data-lang on the <img> flags):
  // document.querySelectorAll(".language-selector [data-lang]").forEach(img => {
  //   img.addEventListener("click", () => switchLanguage(img.getAttribute("data-lang")));
  // });
});