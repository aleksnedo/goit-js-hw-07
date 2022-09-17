import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const gallaryMarkup = galleryCreateMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", gallaryMarkup);

function galleryCreateMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}" />
        </a>`;
    })
    .join("");
}

galleryRef.addEventListener("click", onOpenPictureClick);

function onOpenPictureClick(e) {
  e.preventDefault();
  e.target.alt;
}

let lightboxPicture = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionType: "attr",
  captionDelay: 250,
});
lightboxPicture.on("show.simpleLightbox");
