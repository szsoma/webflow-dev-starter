# Webflow Javascript environment with ParcelJS
This is a basic setup with ParcelJS that you can use for your Webflow website as a local development environment.
⚠️ Please note: This template project is based on my personal preferences and experiences.

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

## Bugs I had
Here are the bug I had and how I solved them
### The punycode module is deprecated.
Just downgrade Node to 20.10.0, it is depreciated in `21.5.0`.
```
nvm install 20.10.
nvm use 20.10.0
```