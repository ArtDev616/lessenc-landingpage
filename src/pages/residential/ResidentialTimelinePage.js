import React from 'react';
import Page from "../Page.js";
import ProjectsTimelineWidget from '../../projects/ProjectsTimelineWidget.js';
import residentialProjects from '../../projects/residentialProjects.js';
import './Residential.css';

const ResidentialTimelinePage = () => (
	<Page className="ResidentialTimelinePage" >
		<article>
			<ProjectsTimelineWidget projects={residentialProjects} />
		</article>
	</Page>
);

export default ResidentialTimelinePage;
