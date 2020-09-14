import React from 'react';
import Page from "../Page.js";
import ProjectsTimelineWidget from '../../projects/ProjectsTimelineWidget.js';
import residentialProjects from '../../projects/residentialProjects.js';

const CommercialTimelinePage = () => (
	<Page className="CommercialTimelinePage">
		<div>
			commercial projects timeline and galleries
			<ProjectsTimelineWidget projects={residentialProjects} />
		</div>
	</Page>
);

export default CommercialTimelinePage;
