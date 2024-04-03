# personal-react-site V1

Simple and responsive professional website for software-engineers to showcase projects, display contact information, and tell your story.

<center>
    <img src="public\homepage-screenshot.png" alt="personal-react-site image" />
</center>

<strong><a href="https://eddie-oconnor.com/" target="_blank">Live Site</a></strong>
<br/>

-   [Features](#-features)
-   [Installation and Setup](#-installation-and-setup)
-   [Structure](#-structure)
-   [Quick Configurations](#-quick-configurations)
-   [Launch](#-launching-the-site-with-cloudflare)
-   [Future improvements and Contributions](#-future-improvements-and-contributions)

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
6. Continued instructions for novice coders in the [Quick Configurations](#-quick-configurations) section

## 📁 Structure

-   `/public`: publicly accessible media (i.e. images)
    - use [favicon](https://favicon.io/) to update your own picture(s) for site tab icons 
-   `/src`: all the components used in this project
    -   `/src/components/`: houses each page (`/src/pages`), shared components (i.e. navbar) and their respective css styles
    -   `/src/data`: make quick global configurations here

## ⚙️ Quick Configurations

- Directory: `/src/data/` - Your changes in these files will be reflected upon save in the local development browser you opened in a previous step.

-   `user.js` - Update the displayed text and images throughout the site by simply updating each field to the desired text or image file path.

-   `styles.css` - Change the font colors and font families of the whole application without editing any other code files. Simply erase the values, input a new color or font, then hit save.
    - [Here](https://www.w3schools.com/colors/colors_picker.asp) is a good tool to see and copy color codes to input below when using `styles.css`
    - Visit [Google Fonts](https://fonts.google.com/) to browse and select fonts by adding them to your cart. View your selected families, then click `<> get embed code` and select `@import` to copy/paste your new import url into `index.css`. You will then be able to globally update the site's fonts by choosing new primary and secondary fonts in `styles.css`
<br/>

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

1. Create Cloudflare account
2. Navigate to Workers & Pages
3. Create new page
4. Connect to your cloned Git repo
5. Input `npm run build` as build command and `build` as location
6. Investigate setting up a custom URL (optional)

## 🌱 Future improvements and Contributions

I welcome any and all feedback and ideas from seasoned developers and novice users! Please reference `github\templates` when doing so.