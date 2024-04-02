import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";

import "./styles/projects.css";

const Projects = () => {

    useEffect(() => {
		document.title = `Projects | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-container">
						<div className="title projects-title">
                            Each project tile contains production and Git repo links. Give them a try!
						</div>

						<div className="subtitle projects-subtitle">
							I've worked on a variety of projects since beginning my coding journey in 2022 and I'm proud of the progress I've made. All of 
                            them are open-source and I welcome any feedback or contributions. I am actively researching backend technologies and how they 
                            could be integrated into future projects. These projects could include, but are not limited to, tools for <strong>non-KYC 
                            verification</strong> and <strong> distinguishing AI from non-AI generated content.</strong>
						</div>

						<div className="projects-list">
							<AllProjects />
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

export default Projects;
