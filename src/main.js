// МОДАЛЬНОЕ ОКНО ХЕДЕР 

// Получаем элементы
const studioTitle = document.getElementById('header-title');
const studioImage = document.getElementById('header-image');// ID заголовка
const modal = document.getElementById('modal');
const closeModal = document.getElementsByClassName('close')[0];

// Открыть модальное окно при нажатии на заголовок
studioTitle.onclick = function() {
    modal.classList.add('active');  // Добавить класс 'active' для плавного открытия
}
studioImage.onclick = function() {
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



// КНОПКА ПРОКРУТКИ СТРАНИЦЫ

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
      
// СЕКЦИЯ УСЛУГ, ПЛАВНОЕ ИЗМЕНЕНИЕ КАРТИНОК ДО И ПОСЛЕ

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

//  АККОРДИОН ПРАЙС

document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling;

    button.classList.toggle('active');

    if (button.classList.contains('active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = 0;
    }
  });
});

// ПЛАВНОЕ ОТКРЫТИЕ СЕКЦИЙ

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');

    function handleScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight * 0.8; // Порог видимости, когда секция станет видимой

            if (sectionTop < triggerPoint) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);

    // Инициализация - проверяем скролл при загрузке страницы
    handleScroll();
});


