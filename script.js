 // Загружаем содержимое header.html в элемент с id "header"
const headerContainer = document.getElementById("header");

if (headerContainer) {
  fetch("/header.html")
    .then((response) => response.text())
    .then((data) => {
      headerContainer.innerHTML = data;

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
  fetch("/footer.html")
  .then((response) => response.text())
  .then((data) => {
    footerContainer.innerHTML = data;
  })
}
