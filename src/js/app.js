import PhotoSwipeLightBox from "photoswipe/lightbox";

import "../styles/app.scss";
import "photoswipe/style.css";

const lightbox = new PhotoSwipeLightBox({
  gallery: ".photo-gallery",
  children: "a",
  pswpModule: () => import("photoswipe"),
});

lightbox.init();
