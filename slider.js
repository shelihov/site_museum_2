const slider = document.querySelector('.slider');

if (slider) {
    const sliderImage = slider.querySelector('.slider-image');
    const sliderDescription = slider.querySelector('.slider-description');
    const prevBtn = slider.querySelector('.slider-prev');
    const nextBtn = slider.querySelector('.slider-next');
    const modalPrev = document.getElementById('sliderModalPrev');
    const modalNext = document.getElementById('sliderModalNext');

    const images = JSON.parse(slider.dataset.images);
    const descriptions = JSON.parse(slider.dataset.descriptions);

    const modal = document.getElementById("sliderModal");
    const modalImage = document.getElementById("sliderModalImage");
    const modalDescription = document.getElementById("sliderModalDescription");
    const modalClose = document.getElementById("sliderModalClose");

    let currentIndex = 0;

    // Показать текущую картинку и описание фото
    function showImage() {
        sliderImage.src = images[currentIndex];
        sliderImage.alt = descriptions[currentIndex];

        modalImage.src = images[currentIndex];
        modalImage.alt = descriptions[currentIndex];

        sliderDescription.textContent = descriptions[currentIndex];
        modalDescription.textContent = descriptions[currentIndex];
    }

    nextBtn.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % images.length;
        showImage();
    });

    prevBtn.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage();
    });

    sliderImage.addEventListener('click', function () {
        modal.classList.add('open');
        modalImage.src = images[currentIndex];
        modalImage.alt = descriptions[currentIndex];
        modalDescription.textContent = descriptions[currentIndex];
    });

    modalPrev.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage();
    });

    modalNext.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % images.length;
        showImage();
    });

    modalClose.addEventListener('click', function () {
        modal.classList.remove('open');
    });

    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.remove('open');
        }
    });

    showImage();
}