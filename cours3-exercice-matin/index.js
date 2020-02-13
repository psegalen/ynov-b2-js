import initMedia from "./media.js";
import initRecherche from "./recherche.js";

const showPage = pageId => {
  const pages = document.getElementsByClassName("page");
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    if (page.id == pageId) page.style.display = "";
    else page.style.display = "none";
  }
};

const selectPage = () => {
  const hash = document.location.hash.replace("#", "");
  const path = hash.split("/");
  switch (path[0]) {
    case "movie":
    case "tv":
      showPage("media");
      initMedia(path[0], path[1]);
      break;
    default:
      showPage("recherche");
      initRecherche();
      break;
  }
};

window.addEventListener("load", selectPage);
window.addEventListener("hashchange", selectPage);
