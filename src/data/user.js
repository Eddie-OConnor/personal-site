const INFO = {
	main: {
		title: "Ed the dev",
		name: "Eddie O'Connor",
		email: "eddie.oconnor3@gmail.com",
		logo: "../headshot.png",
	},

	socials: {
		twitter: "https://twitter.com/eddieodev",
		github: "https://github.com/Eddie-OConnor",
		linkedin: "https://www.linkedin.com/in/edwardjamesoconnor/",
	},

	homepage: {
		title: "I love building apps to solve real world challenges that are a delight to engage with for the end user.",
		description: "",
	},

	about: {
		title: "Get to know me!",
		description: "",
	},

    contact: {
		title: "",
		description: "",
	},

	projects: [
		{
			title: "Personal Site",
			description:
				`A simple and responsive web app to showcase projects, display contact information, and tell your story. Open 
                source for experienced developers to clone/fork and accessible for no-code users to update and host on their own`,
            
            // I recommend not exceeding four logos here, leads to a poor mobile UX
			logos: [
                "../react-icon.png",
                "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
                "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/css/css.png",
            ],
			linkText1: "GitHub",
			link1: "https://github.com/Eddie-OConnor/personal-site",
            linkText2: "Live",
			link2: "https://github.com"
		},

		{
			title: "PollyGlot",
			description:
				`PollyGlot translates any language into on of the top 12 most commonly spoken global languages. 
                It solves the language barrier problem when traveling or anytime you encounter an individual 
                who does not speak the same language(s) as you.`,
            logos: [
                "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
                "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/css/css.png",
                "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/html/html.png",
                "../openai-icon.png",
            ],
			linkText1: "GitHub",
			link1: "https://github.com/Eddie-OConnor/PollyGlot",
            linkText2: "Live",
			link2: "https://polly-glot.netlify.app/"
		},

		{
			title: "Sue",
			description:
				`"Sue" is derived from and a shortened version of "Sous Chef." Say goodbye to meal planning uncertainty 
                and elevate your home cooking game with Sue's tailored recommendations, introducing you to dishes you 
                might not have discovered on your own.`,
            logos: [
                "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
                "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/css/css.png",
                "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/html/html.png",
                "../openai-icon.png",
            ],
			linkText1: "GitHub",
			link1: "https://github.com/Eddie-OConnor/Sue",
            linkText2: "Live",
			link2: "https://sue-chef.netlify.app/"
		}
	],
};

export default INFO;
