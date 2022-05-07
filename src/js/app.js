import AOS from "aos";

import "../styles/app.scss";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  once: true,
});

document.querySelectorAll("img[loading=lazy]").forEach((img) => {
  img.addEventListener("load", () => AOS.refresh(), { once: true });
});
