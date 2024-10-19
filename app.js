// █▀▀ █░░ █░█ █ █▀▄   █░█░█ █▀▀ █▄▄ █▀▀ █░░ █▀█ █░█░█   ░░█ █▀
// █▀░ █▄▄ █▄█ █ █▄▀   ▀▄▀▄▀ ██▄ █▄█ █▀░ █▄▄ █▄█ ▀▄▀▄▀   █▄█ ▄█
// █▀ ▀█▀ ▄▀█ █▀█ ▀█▀ █▀▀ █▀█   ▀█▀ █▀▀ █▀▄▀█ █▀█ █░░ ▄▀█ ▀█▀ █▀▀
// ▄█ ░█░ █▀█ █▀▄ ░█░ ██▄ █▀▄   ░█░ ██▄ █░▀░█ █▀▀ █▄▄ █▀█ ░█░ ██▄

const parceled = true

// * Testing parcel app
alert(' Your Parcel.js based Webflow development environment is up and running! 👍 ');

// * Import custom Styles
import "./src/styles/style.css"

import home from "./src/pages/Home/home";

// import ScrollTrigger from 'gsap/ScrollTrigger'  // TODO [import GSAP have to import in the function's js file]

// TODO don't forget to register plugins if you want to use GSAP
//gsap.registerPlugin(ScrollTrigger, Flip);

// GLOBAL SCRIPTS
import initLenis from "./src/global/lenis";
initLenis();

// ! PAGE RELATED SCRIPTS

// Home page
const isHome = document.querySelector("body").classList.contains("body--home");
if (isHome) {
  home();
}

// About page
const isAbout = document.querySelector("body").classList.contains("body--about");
if (isAbout) {
  about();
}

// Work page
const isWork = document.querySelector("body").classList.contains("body--work");
if (isWork) {
  work();
}

// Services page
const isServices = document.querySelector("body").classList.contains("body--services");
if (isServices) {
  services();
}

// Career page
const isCareer = document.querySelector("body").classList.contains("body--career");
if (isCareer) {
  career();
}