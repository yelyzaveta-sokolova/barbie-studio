
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
