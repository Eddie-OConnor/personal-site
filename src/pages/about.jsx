import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{/* {INFO.about.title}  uncomment this if building about page from user.js*/}

                                    Get to know me!

								</div>

								<div className="subtitle about-subtitle">
									{/* {INFO.about.description}  uncomment this if building about page from user.js*/}
                                    <p>
                                        With a solid background in ad tech, I bring a unique blend of technical expertise and client-facing experience to the 
                                        table. In my most recent role as a solution engineer, I collaborated closely with the sales team throughout the pre-sale 
                                        cycle for our demand-side platform (DSP). This involved conducting SaaS product demonstrations, coordinating responses 
                                        to RFIs, and leveraging my hands-on platform knowledge to provide platform enhancement ideas to the product team.
                                    </p>
                                    <p>
                                        Beyond my professional pursuits, I am an avid endurance athlete, chef, reader, home improvement DIYer, Bitcoiner, and 
                                        sports fan. These varied interests not only fuel my personal growth but also contribute to my well-rounded 
                                        perspective and a relentless desire to learn.
                                    </p>
                                    <p>
                                        As a new father, I have mastered the art of balancing multiple priorities while maintaining a strong work ethic and commitment 
                                        to family. I thrive in dynamic environments that demand adaptability, creative problem-solving, pursuit of improvement and 
                                        discipline.
                                    </p>
                                </div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
