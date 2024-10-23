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
2. Clone the repository by selecting  **"Use this template"**  and create a new repository, naming it after your project.
3. Open the new repository in GitHub Desktop by clicking  **`<> Code → Open with GitHub Desktop`**.
4. In VS Code, open your project folder and run the command  `npm i`  in the terminal to install dependencies.

## Step 2: Start Coding
1. Now, you're ready to begin coding! Open the  `app.js`  file in your project folder—this will serve as the input file for your project.
2. To start the dev server, open a terminal at the root of the project and run the  `npm run dev`  command You can see your generated JS files at  `http://localhost:1234/app.js`

> **Note:**  jQuery is already included in the project but won’t be added to the final build since Webflow provides it by default on all sites.

## Step 3: Webflow Integration 📝
Now things are about to get exciting!
The template will automatically refreshes the page every time you save a JavaScript file, making your workflow more efficient and saving you time.

Paste this script in the `Before </body> tag` part of the Webflow custom code in the project settings so that it loads on all pages. We will change the url of Vercel (or Netlify) later to load the production files.
```
<script src="http://localhost:1234/app.js"></script>  
<!-- tries to load from local host -->
<script>
if(typeof parceled === 'undefined') {
		let script = document.createElement('script')
		script.type = 'text/javascript'
		script.src = 'https://[YOUR-PROJECT-NAME].vercel.app/app.js';
		document.head.appendChild(script)
	}
//checks if the parceled variable from app.js is undefined - meaning local host isn't up and running
//if not loads from the Vercel app
</script>
```
This script automatically loads the correct JavaScript file based on your environment.
-   During development, if your dev server is running, it will load the JS files from your local machine.
-   If the code is pushed to production, and the dev server isn't running, it will load the files from Vercel (or Netlify).

That way you don't have to ping the Webflow dev every time you want to test some code, and you don't have to connect to the Webflow account of the site.

## Step 4: Going into production 🚀
1.  Your code is ready. Now it's time to push! For this step, you need to **commit** and then **push** your code to **GitHub**. You can easily do this using the Github desktop application.
2. Create an account on **Vercel** (or Netlify) and set up a project. Choose the GitHub and select your project repository. Then, click Deploy site. BOOM! Your project is now live!
3. **Customizing the Domain Name:** You can change the domain name. To do this, navigate to `Domains`. You'll see your current domain and an `Edit` button. Click it change the domain name. I recommend using the final site name to easily distinguish between projects later.
Now, you can access your JavaScript files at your custom Netlify URL:
```
https://[YOUR-PROJECT-NAME].vercel.app/app.js
```
🙌 Nicely done!
From now on, whenever you push code to GitHub, Vercel will automatically build and deploy the latest version of your project. 🙌
