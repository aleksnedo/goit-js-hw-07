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
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
        </div>`;
    })
    .join("");
}

galleryRef.addEventListener("click", onOpenPictureClick);

function onOpenPictureClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const galleryOriginalPicture = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${galleryOriginalPicture}" width="800" height="600">
`);
  instance.show();

  galleryRef.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
