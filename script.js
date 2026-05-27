const siteRoot = new URL("./", document.currentScript.src);

function resolveRootPaths(container) {
  container.querySelectorAll("a[href^='/'], img[src^='/']").forEach((element) => {
    const attribute = element.hasAttribute("href") ? "href" : "src";
    const value = element.getAttribute(attribute);
    element.setAttribute(attribute, new URL(value.slice(1), siteRoot).href);
  });
}

 // Загружаем содержимое header.html в элемент с id "header"
const headerContainer = document.getElementById("header");

if (headerContainer) {
  fetch(new URL("header.html", siteRoot))
    .then((response) => response.text())
    .then((data) => {
      headerContainer.innerHTML = data;
      resolveRootPaths(headerContainer);

      const burgerBtn = document.getElementById("burgerBtn");
      const mainNav = document.getElementById("mainNav");

      if (burgerBtn && mainNav) {
      burgerBtn.addEventListener("click", function () {
        mainNav.classList.toggle("open");
      });
    }
  });

}

const footerContainer = document.getElementById("footer");

if (footerContainer) {
  fetch(new URL("footer.html", siteRoot))
  .then((response) => response.text())
  .then((data) => {
    footerContainer.innerHTML = data;
    resolveRootPaths(footerContainer);
  })
}
