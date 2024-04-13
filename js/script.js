// Отримуємо необхідні елементи
const modal = document.getElementById("myModal");
const openModalButton = document.getElementById("openModal"); // Змінив ідентифікатор кнопки "Order Service"
const closeButton = modal.querySelector(".button-modal");
const sendButton = modal.querySelector(".button-send");

// Функція для відкриття модального вікна
function openModal() {
  modal.style.visibility = "visible";
  modal.style.opacity = 1;
}

// Функція для закриття модального вікна
function closeModal() {
  modal.style.visibility = "hidden";
  modal.style.opacity = 0;
}

// Додаємо обробник події для кнопки відкриття модального вікна
openModalButton.addEventListener("click", openModal);

// Додаємо обробник події для кнопки закриття модального вікна
closeButton.addEventListener("click", closeModal);

// Додаємо обробник події для кнопки відправлення форми
sendButton.addEventListener("click", closeModal);
