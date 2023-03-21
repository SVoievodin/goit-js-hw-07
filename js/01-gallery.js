import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const galleryRef = document.querySelector("ul.gallery");

const imgListRef = galleryItems.map(image => `<li class="gallery__item" "><img  class="gallery__image" src="${image.preview}" alt="${image.description}" </li>`).join('');

galleryRef.insertAdjacentHTML("afterbegin", imgListRef);

const imgOrigListRef = galleryItems.map(image => image.original);
const imgDescrListRef = galleryItems.map(image => image.description);

galleryRef.addEventListener('click', onClickImage);

function onClickImage(event) {
    let descrIndex = imgDescrListRef.indexOf(event.target.alt)
    basicLightbox.create(`
		<img width="1400" height="900" src="${imgOrigListRef[descrIndex]}">
	`).show()
}





