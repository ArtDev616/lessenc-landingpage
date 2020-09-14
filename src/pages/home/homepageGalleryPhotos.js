import { parsePhotoJson } from '../../projects/parseProjectsJson.js';
import residentialProjectsData from '../../projects/residentialProjectsData.json';
import PhotoCollection from '../../photos/PhotoCollection.js';

const homepageGalleryPhotos = new PhotoCollection();

const photo1 = parsePhotoJson(residentialProjectsData["project B"]["photos"]["photo 1"]);

const photo2 = parsePhotoJson(residentialProjectsData["project A"]["photos"]["photo 1"]);

homepageGalleryPhotos.add(photo1, photo2);

export default homepageGalleryPhotos;

