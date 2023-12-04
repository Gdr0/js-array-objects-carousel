const images = [
  {
    img: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    img: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    img: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    img: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    img: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

const slider = document.getElementById("slider");

// creo un array che contanga solo le immagini
const immagini = images.map((pics) => {
  return pics.img;
});
console.log(immagini);
//
// creo le card dove andrò ad inserire le immagini
for (let i = 0; i < immagini.length; i++) {
  const items = createMyElement("div", "item");
  const pic = createMyElement("img", "pic");
  slider.append(items);
  items.append(pic);
  const imgI = immagini[i];
  pic.src = imgI;
  pic.append(imgI);
}
//
//
//

// recupero items
const items = document.getElementsByClassName("item");
// definisco la mia varaiabile per contare
let activeItem = 0;
// assegno active al primo elemento del carosello
items[0].classList.add("active");
const next = document.querySelector(".next");
next.addEventListener("click", function () {
  if (activeItem < items.length - 1) {
    items[activeItem].classList.remove("active");
    activeItem++;
    items[activeItem].classList.add("active");
  }
  if (activeItem === items.length - 1) {
    next.classList.add("hidden");
  }
  if (activeItem < items.length - 1) {
    next.classList.remove("hidden");
  }
  if (activeItem > 0) {
    previous.classList.remove("hidden");
  }
});
// CREO IL COMANDO PER SCORRERE AL CONTRARIO
const previous = document.querySelector(".previous");
previous.addEventListener("click", function () {
  // RIMUOVO ACTIVE
  if (activeItem < items.length) {
    items[activeItem].classList.remove("active");
    //ABBASSO L'INDICE DELL'ELEMENTO VISUALIZZATO
    activeItem--;
    // AGGIUNGO ACTIVE ALL'ELEMENTO
    items[activeItem].classList.add("active");
  }
  //   AGGIUNGO next AGLI ELEMNTI QUANDO MI MUOVO VERSO IL BASSO
  if (activeItem < items.length - 1) {
    next.classList.remove("hidden");
  }
  //   NASCONDO IL PULSANTE AL PRIMO ELEMENTO
  if (activeItem === 0) {
    previous.classList.add("hidden");
  }
});

// funzioni
function createMyElement(tagtype, classname) {
  const currentElement = document.createElement(tagtype);
  currentElement.classList.add(classname);
  return currentElement;
}
