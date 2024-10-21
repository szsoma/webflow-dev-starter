
# Webflow Javascript environment with ParcelJS
This is a basic setup with ParcelJS that you can use for your Webflow website as a local development environment.

⚠️ Please note: This template project is based on my personal preferences and experiences.

## Live demo

You can find a simple example of a Webflow site using this setup here. The code is hosted on Netlify here. If you want to see the Webflow preview, it's here 👍

## Pre installed tools or libs
I've already installed some dependencies:
- jQuery
- GSAP
- Swiper JS
- SplitType
- Lenis
- Rimraf

## Hosting static files like img, scripts, etc.
Add your files to the /static folder

## How to use with Webflow
[Check the documentation here ↳](/Users/soma/Documents/work/03_coding/webflow-dev-starter/HOWTO.md)

---
---
## Bugs I had
Here are the bug I had and how I solved them
 1. **The punycode module is deprecated.**
		 Just downgrade Node to 20.10.0, it is depreciated in `21.5.0`.
	```
	nvm install 20.10.
	nvm use 20.10.0
	```

