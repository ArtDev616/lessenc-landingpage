import React from 'react';
import GalleryWidget from '../gallery/GalleryWidget.js';
import GalleryTestimonialTextWidget from '../gallery/GalleryTestimonialTextWidget.js';
import GalleryPhoto from '../gallery/GalleryPhoto.js';
import './ProjectGalleryWidget.css';
import moment from 'moment';
const ProjectGalleryWidget = ({ project, title }) => {

	const photos = project.photos.toArray().map((photo) => {
		const testimonial = project.testimonials.getNext();
		const caption = <GalleryTestimonialTextWidget testimonial={testimonial} />;
		const galleryPhoto = new GalleryPhoto( photo, caption );
		return galleryPhoto;
	});
	console.log(project.completedDate)
	return (
		<section className="ProjectGalleryWidget">
			{/* <h1 className="ProjectDate">JUNE 2019</h1> */}
			<h1 className="ProjectDate">{moment(project.completedDate).format('MMMM YYYY')}</h1>
			<h2 className="ProjectName">{title || project.name}</h2>
			<GalleryWidget className="ProjectGalleryFigure" photos={photos} />
		</section>
	);

};

export default ProjectGalleryWidget;
