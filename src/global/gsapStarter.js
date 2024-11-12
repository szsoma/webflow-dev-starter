// Import GSAP and any plugins you need (add plugins as required)
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Breakpoints (you can adjust this as needed)
const MOBILE_MAX_WIDTH = 768;

// Variables to track current mode (desktop or mobile)
let isMobile = window.innerWidth <= MOBILE_MAX_WIDTH;
let animations = [];

// Function to clear animations when switching modes
function clearAnimations() {
  animations.forEach(animation => animation.kill());
  animations = [];
}

// Initialize Desktop Animations
function initDesktopAnimations() {
  clearAnimations();

  // Example: Animating an element on scroll
  animations.push(
    gsap.from(".desktop-element", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".desktop-element",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      }
    })
  );

  // Additional desktop-specific animations here...
}

// Initialize Mobile Animations
function initMobileAnimations() {
  clearAnimations();

  // Example: A different animation style for mobile
  animations.push(
    gsap.from(".mobile-element", {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".mobile-element",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      }
    })
  );

  // Additional mobile-specific animations here...
}

// Helper to initialize animations based on screen size
function initAnimations() {
  if (window.innerWidth <= MOBILE_MAX_WIDTH) {
    if (!isMobile) {
      isMobile = true;
      initMobileAnimations();
    }
  } else {
    if (isMobile) {
      isMobile = false;
      initDesktopAnimations();
    }
  }
}

// Resize listener to manage animations when resizing
window.addEventListener("resize", initAnimations);

// Initial call to setup animations on load
window.addEventListener("load", initAnimations);
