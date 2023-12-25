const reviews = [
  {
    id: 1,
    name: "Mina",
    job: "web developer",
    img: "3135768.png",
    text: "This site can’t be reachedcandohydraulic.com’s server IP address could not be found.",
  },
  {
    id: 2,
    name: "Mitra",
    job: "ux designer",
    img: "3135823.png",
    text: "This site can’t be reachedcandohydraulic.com’s server IP address could not be found.",
  },
  {
    id: 3,
    name: "Behnaz",
    job: "web designer",
    img: "3135768.png",
    text: "This site can’t be reachedcandohydraulic.com’s server IP address could not be found.",
  },
  {
    id: 4,
    name: "Babak",
    job: "manager",
    img: "3135823.png",
    text: "This site can’t be reachedcandohydraulic.com’s server IP address could not be found.",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
