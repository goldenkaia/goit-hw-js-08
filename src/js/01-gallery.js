// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const listEl = document.querySelector('.gallery');
//create markup with map with the data from galleryItems
const markup = galleryItems
  .map(galleryItem => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
     <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
  </a>
</li>`;
  })
  .join('');

listEl.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  navText: ['&#9668;', '&#9658;'],
  captionsData: 'alt',
  captionDelay: 250,
});
