# personal-react-site V1

Simple and responsive professional website for software-engineers to showcase projects, display contact information, and tell your story.

<center>
<img src="" alt="personal-react-site image" />
</center>

Live demo here: <a href="" target="_blank">tbd</a>
<br/>

-   [Features](#-features)
-   [Installation and Setup](#-installation-and-setup-instructions)
-   [Structure](#-folder-structure)
-   [Quick Configurations](#-configurations)
-   [Launch](#-building-the-react-app)
-   [Future improvements and Contributions](#-contribution)

## 📙 Features

-   📖 Multi-Page
    -   Home
    -   About
    -   Projects
    -   Contact
-   📱 Fully Responsive
-   🛠 Easy configurations


## 🛠 Installation and Setup

1. Clone the repository

2. Ensure `NodeJS` and `git` are installed on your computer

2. Run `npm install` in the terminal

3. Then run `npm start` which will run the app in development mode and open a new browser tab

4. If the browser does not automatically open, look for the local port url in the terminal which will look something like this `Local:http://localhost:3000`

5. Make changes and see them reflected in the browser when saved

6. Continued instructions for novice coders in the [Configurations](#-configurations) section

## 📁 Structure

-   `/public`: publicly accessible contents (ex: images, media).
    - use this site to update your own picture(s) for icons -> https://favicon.io/
-   `/src`: all the components used in this project.
    -   `/src/components/`: each reusable components of each pages.
    -   `/src/data`: configurations of the web app.
    -   `/src/pages`: pages that include in the web app.

## ⚙️ Configurations

Directory: `/src/data/`

-   `user.js`

    Update the displayed text and images throughout the site by simply updating each field to the desired text or image file path.

-   `styles.css`

    Change the font colors and font families of the whole application without editing any other code files. Simply erase the values, input a new color or font, then hit save.

-   Your changes in these files will be reflected upon save in the local development browser you opened in a previous step.

    ```css
    :root {
    	/* ------- colors ------- */
    	--primary-color: #27272a;
    	--secondary-color: #65656d;
    	--tertiary-color: #acacb4;
    	--quaternary-color: #e4e4e7;
    	--link-color: #14b8a6;
    	/* ---------------------- */

    	/* ------- fonts ------- */
    	--primary-font: "Heebo", sans-serif;
    	--secondary-font: "Roboto", sans-serif;
    	/* --------------------- */
    }
    ```

## 🚀 Launching the Site with Cloudflare

1. 

## 🌱 Future improvements and Contributions

I welcome any and all feedback and ideas from seasoned developers and novice users!