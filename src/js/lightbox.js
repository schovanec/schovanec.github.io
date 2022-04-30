import PhotoSwipeLightBox from "photoswipe/lightbox";
import "photoswipe/style.css";

const lightbox = new PhotoSwipeLightBox({
  gallery: ".photo-gallery",
  children: "a",
  pswpModule: () => import("photoswipe"),
});

lightbox.on("uiRegister", () => {
  lightbox.pswp.ui.registerElement({
    name: "image-caption",
    order: 9,
    isButton: false,
    appendTo: "root",
    html: "Caption text",
    onInit: (el, pswp) => {
      pswp.on("change", () => {
        const currentSlideElement = pswp.currSlide.data.element;
        let captionHTML = "";
        if (currentSlideElement) {
          const hiddenCaption = currentSlideElement.querySelector(
            ".photo-gallery__lightbox-caption"
          );
          if (hiddenCaption) {
            captionHTML = hiddenCaption.innerHTML;
          } else {
            const image = currentSlideElement.querySelector("img");
            if (image) {
              captionHTML = image.getAttribute("alt");
            }
          }

          el.innerHTML = captionHTML || "";
        }
      });
    },
  });
});

lightbox.init();
