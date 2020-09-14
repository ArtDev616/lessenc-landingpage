import React from 'react';
import GalleryWidget from '../../gallery/GalleryWidget.js';
import GalleryPhoto from '../../gallery/GalleryPhoto.js';
import GalleryPhotoCaption from '../../gallery/GalleryPhotoCaption.js';
import homepageGalleryPhotos from './homepageGalleryPhotos.js';

import leftArrow from "./24px-left-arrow.svg";
import rightArrow from "./24px-right-arrow.svg";

const Caption = () => (
	<GalleryPhotoCaption>
		<div></div>
		<div className="GalleryQuote">
			<h1>
				Transform your vision into a beautiful home.
			</h1>
			<div className="InputQuote">
				<input type="text" placeholder="Your name and number" />
				<button type="button">
					REQUEST A QUOTE
				</button>
			</div>
		</div>
		<div className="social">
			<div className="Trail">
				<div onClick={handleLeftNavClick} className="TrailLeft"><img src={leftArrow} alt="" /></div>
				<div onClick={handleRightNavClick} className="TrailRight"><img src={rightArrow} alt="" /></div>
			</div>
		</div>
	</GalleryPhotoCaption>
);

const handleLeftNavClick = () => {
	this._gallery._leftNav.click();
};

const handleRightNavClick = () => {
	this._gallery._rightNav.click();
};

const HomePageGalleryFigure = ({ project, title }) => {

	const galleryPhotos = homepageGalleryPhotos.toArray().map(photo => {
		return new GalleryPhoto(photo, <Caption />);
	});

	return (
		<GalleryWidget
			className="HomePageGalleryFigure"
			photos={galleryPhotos}
			showThumbnails={false}
			showPlayButton={false}
			showFullscreenButton={false}
			ref={comp => this._gallery = comp}
		/>
	);

};

export default HomePageGalleryFigure;

// ./src/pages/home/HomePageGalleryFigure.js