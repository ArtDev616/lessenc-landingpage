import React from 'react';
import logoUrl from './logo.png';
import HomePageLink from '../pages/home/HomePageLink.js';

const Logo = () => (
	<HomePageLink>
		<img src={logoUrl} alt="Lenssen, Inc. --- Builder of Beautiful Homes" />
	</HomePageLink>
);

export default Logo;
