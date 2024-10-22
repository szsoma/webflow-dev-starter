# How to the template in Webflow?

**ViteJs template with JavaScript 👇**

[https://github.com/szsoma/webflow-dev-starter](https://github.com/szsoma/webflow-dev-starter)

### Steps to follow
Before starting this tutorial, ensure you have a basic understanding of Git, GitHub, and Node.js.

### Essential Tools
-   You must have Git, Node.js installed on your machine.
-   An IDE such as VSCode is recommended for writing and editing code.
- Github Desktop app
-   A GitHub and Vercel (or Netlify) account will also be needed.

> **Note:**  If you're unfamiliar with any of these tools, I recommend watching tutorials on JavaScript and its ecosystem before proceeding.

### Browser Requirements
If you're using an ad blocker or the Brave browser, you’ll need to disable it on your live Webflow site (not in the Designer) to allow code injection from your local machine. For Brave users, disable Brave Shields on the page by clicking the lion icon next to the URL.

> **Important:**  This setup is currently incompatible with Safari.

## Step 1: Installation and initialization 💽
1. Go to the template: [https://github.com/szsoma/webflow-dev-starter](https://github.com/szsoma/webflow-dev-starter)
2. Clone the repo by clicking on "Use this template" and configure your new repo with the name of your project.
3. Open your new repository with GitHub Desktop app by clicking on `<> Code → Open with GitHub Desktop`
4. Open your project folder in VS Code and run `npm i` command in terminal

## Step 2: Coding
```
<script src="http://localhost:1234/app.js"></script>  
<!-- tries to load from local host -->

<script>
if(typeof parceled === 'undefined') {
		let script = document.createElement('script')
		script.type = 'text/javascript'
		script.src = 'https://webflow-dev-starter.vercel.app/app.js';
		document.head.appendChild(script)
	}
//checks if the parceled variable from app.js is undefined - meaning local host isn't up and running
//if not loads from the Vercel app
</script>
```