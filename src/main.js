
// Получаем элементы
const studioTitle = document.getElementById('header-title'); // ID заголовка
const modal = document.getElementById('modal');
const closeModal = document.getElementsByClassName('close')[0];

// Открыть модальное окно при нажатии на заголовок
studioTitle.onclick = function() {
    modal.classList.add('active');  // Добавить класс 'active' для плавного открытия
}

// Закрыть модальное окно при нажатии на крестик
closeModal.onclick = function() {
    modal.classList.remove('active');  // Убрать класс 'active' для плавного закрытия
}

// Закрыть модальное окно, если кликнуть вне его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove('active');  // Убрать класс 'active', если кликнули за пределами окна
    }
}

  let scrollTopBtn = document.getElementById("scrollTopBtn");

      // Показываем кнопку при прокрутке страницы вниз на 300px
      window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
          scrollTopBtn.style.display = "block";
        } else {
          scrollTopBtn.style.display = "none";
        }
      };

      // Когда пользователь нажимает на кнопку, страница прокручивается вверх
      scrollTopBtn.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
};
      

document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll('.photo-slider');
    
    sliders.forEach(slider => {
        const images = slider.querySelectorAll('.slider-image');
        let currentIndex = 0;

        // Устанавливаем первое изображение активным
        images[currentIndex].classList.add('active');

        // Функция для смены изображений
        function changeImage() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }

        // Смена изображения каждые 3 секунды
        setInterval(changeImage, 3000);
    });
});