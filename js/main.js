import { createPhotos } from './data.js';
import { createThumbnails } from './thumbnails.js';

const data = createPhotos();

createThumbnails(data);
