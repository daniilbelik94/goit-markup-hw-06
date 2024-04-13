// Получаем элементы модального окна
var modal = document.getElementById("myModal");
var closeButton = document.getElementsByClassName("close")[0];

// Когда пользователь кликает на кнопку, открываем модальное окно
document.querySelector(".main-button").addEventListener("click", function() {
  modal.style.display = "block";
});

// Когда пользователь кликает на кнопку закрытия, закрываем модальное окно
closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});

// Когда пользователь кликает вне модального окна, закрываем его
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
