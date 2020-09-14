import React from 'react';
import classnames from 'classnames';

const HomePageFigure = ({ children, caption, className }) => (
	<figure className={classnames('HomePageFigure', className)}>
		<figcaption>
			{caption}
		</figcaption>
		{children}
	</figure>
);

export default HomePageFigure;



// WEBPACK FOOTER //
// ./src/pages/home/HomePageFigure.js