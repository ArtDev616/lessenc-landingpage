import React from 'react';

const number = '+15097500945';
const numberFormatted = '(509) 750-0945';

const PhoneLink = ({ icon = false }) => (
	<a href={`tel:${number}`} target="phone">
		{ icon ? (
			<span className="PhoneImage">
				<i className="fa fa-phone" />
			</span>
		) : null }
		{numberFormatted}
	</a>
);

export default PhoneLink;
