

# Webflow Javascript environment with ParcelJS
This is a basic setup with ParcelJS that you can use for your Webflow website as a local development environment.

⚠️ Please note: This template project is based on my personal preferences and experiences.

## Features
-  🪶 Lightweight
- 📦 It contains only the basic configuration
- 🔐 Private GitHub repo
-  ☁️ Vercel (or Netlify) for host the files
- 👥 Public folder for hosting files
- 📁 Includes most used 3rd party libraries
- 🔍 Separated global and page-specific scripts

## Live demo

You can find a simple example of a Webflow site using this setup here. This code is hosted on Vercel [here](https://webflow-dev-starter.vercel.app/app.js).

## Pre installed tools
I've already installed some most used dependencies:
- jQuery
- GSAP
- Swiper JS
- SplitType
- Lenis
- Rimraf

## Hosting static files like img, scripts, etc.
Add your files to the `/public` folder

## How to use with Webflow
[Check the documentation here ↳](HOWTO.md)

## Bugs I had
Here are the bug I had and how I solved them
 1. **The punycode module is deprecated.**
	Just downgrade Node to 20.10.0, it is depreciated in `21.5.0`.
	```
	nvm install 20.10.
	nvm use 20.10.0
	```
