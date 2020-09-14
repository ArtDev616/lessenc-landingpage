import React from 'react';
import GalleryWidget from '../../gallery/GalleryWidget.js';
import GalleryPhoto from '../../gallery/GalleryPhoto.js';
import homepageGalleryPhotos from './homepageGalleryPhotos.js';

const Text = () => (
	<section>
		<h1>Transform your vision into a beautiful home.</h1>
		<button type="button">
			Set up a Meet and Greet
		</button>
	</section>
);

const HomepageGalleryWidget = ({ project, title }) => {

	const galleryPhotos = homepageGalleryPhotos.toArray().map(photo => {
		return new GalleryPhoto(photo, <Text />);
	});

	return (
		<GalleryWidget photos={galleryPhotos} />
	);

};

export default HomepageGalleryWidget;
