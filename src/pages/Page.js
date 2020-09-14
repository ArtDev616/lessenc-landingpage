import React from 'react';
import classnames from 'classnames';
import SiteHeader from '../site/header/SiteHeader.js';
import SiteFooter from '../site/footer/SiteFooter.js';

import "./Page.css";

const siteHeader = <SiteHeader />;
const siteFooter = <SiteFooter />;

const Page = ({ children, className }) => (
	<div className={classnames("Page", className)}>
		{siteHeader}
		<main className="SiteContent">
			{children}
		</main>
		{siteFooter}
	</div>
);

export default Page;

// ./src/pages/Page.js