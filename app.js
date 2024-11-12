/**
  * █▀▀ █░░ █░█ █ █▀▄   █░█░█ █▀▀ █▄▄ █▀▀ █░░ █▀█ █░█░█   ░░█ █▀
  * █▀░ █▄▄ █▄█ █ █▄▀   ▀▄▀▄▀ ██▄ █▄█ █▀░ █▄▄ █▄█ ▀▄▀▄▀   █▄█ ▄█
  * █▀ ▀█▀ ▄▀█ █▀█ ▀█▀ █▀▀ █▀█   ▀█▀ █▀▀ █▀▄▀█ █▀█ █░░ ▄▀█ ▀█▀ █▀▀
  * ▄█ ░█░ █▀█ █▀▄ ░█░ ██▄ █▀▄   ░█░ ██▄ █░▀░█ █▀▀ █▄▄ █▀█ ░█░ ██▄
*/
// Variable for checking if dev server is running
const parceled = true

// Initialize Parcel.js with Webflow | Don't forget to delete or comment this line after project setup! ;) 
alert('Your Parcel.js based Webflow development environment is up and running! 👍');

// Import custom styles
import "./src/styles/style.css";

// Import global scripts
import initLenis from "./src/global/lenis";
initLenis();

import nav from "./src/global/nav";
nav();

import footer from "./src/global/footer";
footer();

// Import page-specific scripts
import home from "./src/pages/home/home";
import about from "./src/pages/about/about";
import work from "./src/pages/work/work";
import services from "./src/pages/services/services";
import career from "./src/pages/career/career";

// Function to initialize page-specific scripts
const initializePageScripts = () => {
  const pages = [
    { className: 'body--home', initFunction: home },
    { className: 'body--about', initFunction: about },
    { className: 'body--work', initFunction: work },
    { className: 'body--services', initFunction: services },
    { className: 'body--career', initFunction: career }
  ];

  pages.forEach(page => {
    if (document.querySelector('body').classList.contains(page.className)) {
      page.initFunction();
    }
  });
};

// Execute page-specific scripts
initializePageScripts();

// TODO: Import and register GSAP plugins in the relevant function files
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger, Flip);
