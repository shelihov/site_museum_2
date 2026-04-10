 // Загружаем содержимое header.html в элемент с id "header"
const headerContainer = document.getElementById("header");

if (headerContainer) {
  fetch("/header.html")
    .then((response) => response.text())
    .then((data) => {
      headerContainer.innerHTML = data;
    });
}
