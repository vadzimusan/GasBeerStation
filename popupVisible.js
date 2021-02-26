let popup = document.querySelector(".nav-button-input");
let modalForm = document.querySelector(".modal-form");
let close = document.querySelector(".modal-close")

popup.addEventListener("click", function (event) {
    event.preventDefault();
    modalForm.classList.add("modal-form-show");
})
close.addEventListener("click", function (event) {
    event.preventDefault();
    modalForm.classList.remove("modal-form-show")
})


