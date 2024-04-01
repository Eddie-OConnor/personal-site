import React from "react";
import Project from "./project";
import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logos={project.logos}
						title={project.title}
						description={project.description}
						linkText1={project.linkText1}
						link1={project.link1}
                        linkText2={project.linkText2}
						link2={project.link2}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;