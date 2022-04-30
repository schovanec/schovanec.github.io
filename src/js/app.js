import { canUseCssVariables } from "./utility/feature-detect";

import "../styles/app.scss";

// if (!canUseCssVariables()) {
//   document.querySelectorAll(".photo-gallery__item").forEach((e) => {
//     const width = parseInt(e.getAttribute("data-pswp-width"));
//     const height = parseInt(e.getAttribute("data-pswp-height"));
//     const aspect = width / height;
//     e.style.width = `${aspect * 200}px`;
//     e.style.flexGrow = aspect;
//   });
// }
