// █▀▀ █░░ █░█ █ █▀▄   █░█░█ █▀▀ █▄▄ █▀▀ █░░ █▀█ █░█░█   ░░█ █▀
// █▀░ █▄▄ █▄█ █ █▄▀   ▀▄▀▄▀ ██▄ █▄█ █▀░ █▄▄ █▄█ ▀▄▀▄▀   █▄█ ▄█
// █▀ ▀█▀ ▄▀█ █▀█ ▀█▀ █▀▀ █▀█   ▀█▀ █▀▀ █▀▄▀█ █▀█ █░░ ▄▀█ ▀█▀ █▀▀
// ▄█ ░█░ █▀█ █▀▄ ░█░ ██▄ █▀▄   ░█░ ██▄ █░▀░█ █▀▀ █▄▄ █▀█ ░█░ ██▄

// Initialize Parcel.js with Webflow
alert('Your Parcel.js based Webflow development environment is up and running! 👍');

// Import custom styles
import "./styles/style.css";

// Import global scripts
import initLenis from "./global/lenis";
initLenis();

// Import page-specific scripts
import home from "./pages/Home/home";
import about from "./pages/About/about";
import work from "./pages/Work/work";
import services from "./pages/Services/services";
import career from "./pages/Career/career";

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
