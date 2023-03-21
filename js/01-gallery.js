import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const galleryRef = document.querySelector("ul.gallery");
const imgListRef = galleryItems.map(image => `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`).join('');

galleryRef.insertAdjacentHTML("afterbegin", imgListRef);
galleryRef.addEventListener('click', onClickImage);

function onClickImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") { return; }
  window.addEventListener('keydown', onEscDown,)
  basicLightbox.create(`<img width="1400" height="900" src="${event.target.dataset.source}" alt="${event.target.alt}">`).show();
}

function onEscDown(event) {
  if (event.code === 'Escape') {
    const modalRef = document.querySelector("div.basicLightbox");
    modalRef.remove()
    window.removeEventListener('keydown', onEscDown,)
  }
}



//*реалізація через пошук індекса, працює але не вистачає перевірки на тег та без Esc
// const galleryRef = document.querySelector("ul.gallery");
// const imgListRef = galleryItems.map(image => `<li class="gallery__item" "><img  class="gallery__image" src="${image.preview}" alt="${image.description}" </li>`).join('');
// galleryRef.insertAdjacentHTML("afterbegin", imgListRef);
// const imgOrigListRef = galleryItems.map(image => image.original);
// const imgDescrListRef = galleryItems.map(image => image.description);
// galleryRef.addEventListener('click', onClickImage);
// function onClickImage(event) {
//     let descrIndex = imgDescrListRef.indexOf(event.target.alt)
//     basicLightbox.create(`
// 		<img width="1400" height="900" src="${imgOrigListRef[descrIndex]}">
// 	`).show()
// }