AOS.init();

const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});

// Fixed Nav
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});

new TypeIt("#type1", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Photographer", { delay: 400 })
  .pause(800)
  .delete(7)
  .type(" Editor", { delay: 400 })
  .pause(800)
  .delete(12)
  .type("Video Editor", { delay: 400 })
  .pause(800)
  .delete(12)
  .go();
new TypeIt("#type2", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Photographer", { delay: 400 })
  .pause(500)
  .delete(7)
  .type(" Editor", { delay: 400 })
  .pause(500)
  .delete(12)
  .type("Video Editor", { delay: 400 })
  .pause(800)
  .delete(12)
  .go();

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".banner", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
gsap.from(".hero h3", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".hero h4", { opacity: 0, duration: 1, delay: 3, y: -30 });
gsap.from(".hero a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });
gsap.from(".nav-item", {
  opacity: 0,
  duration: 1,
  delay: 1.2,
  y: 30,
  stagger: 0.2,
});
gsap.from(".icons span", {
  opacity: 0,
  duration: 1,
  delay: 4,
  x: -30,
  stagger: 0.2,
});

const glide = document.querySelector(".glide");
if (glide)
  new Glide(glide, {
    type: "carousel",
    startAt: 0,
    perView: 3,
    gap: 30,
    hoverpause: true,
    autoplay: 2000,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoints: {
      996: {
        perView: 2,
      },
      768: {
        perView: 1,
      },
    },
  }).mount();

var imageUrls = [
  'url("images/1.jpg")',
  'url("images/2.jpg")',
  'url("images/3.jpg")',
  'url("images/4.jpg")',

  'url("images/5.jpg")',
  'url("images/6.jpg")',
  'url("images/7.jpg")',
  'url("images/8.jpg")',

  'url("images/9.jpg")',
  'url("images/10.jpg")',
  'url("images/11.jpg")',
  'url("images/12.jpg")',
];

var imageNumber = imageUrls.length;

function imagePop(id) {
  document.getElementById("imagePopId").style.display = "block";
  document.getElementsByTagName("body")[0].style.overflowY = "hidden";

  var imageName = document.getElementById(id + "-image").style.backgroundImage;

  var imageIndex = 0;

  imageIndex = imageUrls.indexOf(imageName);

  document.getElementsByClassName("imageContain")[0].style.animation =
    "he 800ms forwards";

  document.getElementsByClassName("imageContain")[0].style.backgroundImage =
    imageUrls[imageIndex];
}

function imageChange(id) {
  var imageName = document.getElementById(id).style.backgroundImage;

  var imageIndex = 0;

  imageIndex = imageUrls.indexOf(imageName);

  if (imageIndex >= imageNumber - 1) imageIndex = 0;
  else imageIndex++;

  document.getElementById(id).style.backgroundImage = imageUrls[imageIndex];
}

function imageMoveLeft() {
  var imageName = document.getElementById("imageContainId").style
    .backgroundImage;

  var imageIndex = 0;

  imageIndex = imageUrls.indexOf(imageName);

  if (imageIndex <= 0) imageIndex = imageNumber - 1;
  else imageIndex--;

  document.getElementById("imageContainId").style.backgroundImage =
    imageUrls[imageIndex];
}

function imageMoveRight() {
  var imageName = document.getElementById("imageContainId").style
    .backgroundImage;

  var imageIndex = 0;

  imageIndex = imageUrls.indexOf(imageName);

  if (imageIndex >= imageNumber - 1) imageIndex = 0;
  else imageIndex++;

  document.getElementById("imageContainId").style.backgroundImage =
    imageUrls[imageIndex];
}

function imagePopNone() {
  document.getElementsByClassName("imagePop")[0].style.display = "none";
  document.getElementsByTagName("body")[0].style.overflowY = "scroll";
}
