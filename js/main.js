import {createPhotoArray} from './data.js';
import {createThumbnails} from './thumbnails.js';

const data = createPhotoArray();
createThumbnails(data);