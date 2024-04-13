const modal = document.getElementById("myModal");
const openModalButton = document.getElementById("openModal");
const closeButton = modal.querySelector(".button-modal");
const sendButton = modal.querySelector(".modal_button-form"); 


function openModal() {
  modal.style.visibility = "visible";
  modal.style.opacity = 1;
}


function closeModal() {
  modal.style.visibility = "hidden";
  modal.style.opacity = 0;
}


openModalButton.addEventListener("click", openModal);


closeButton.addEventListener("click", closeModal);

sendButton.addEventListener("click", closeModal);
