//Нахожу объект кнопки формы
let navButtonForm = document.querySelector(".nav-button-input");
//Нахожу объект попапа формы
let modalForm = document.querySelector(".modal-form");
//Нахожу объект кнопки закрытия формы
let closeForm = document.querySelector(".modal-close")
//Нахожу объект объект попапа навигации
let navPopup = document.querySelector(".navigation-popup");
//Нахожу объект кнопки закрытия навигации
let closeNav = document.querySelector(".popup-close");
//Нахожу объект кнопки открытия навигации
let navButton = document.querySelector(".mobile-adaptive-nav-popup");
//Нахоожу поля login, в итоге хотел повесить на него .focus(), чтобы он был в фокусе при открытии , но передумал.
let formLogin = modalForm.querySelector("[name=login]");
let formPass = modalForm.querySelector("[name=password]")
//Нахожу мои форму по тегу
let mapForm = modalForm.querySelector("form");
//Записываем в переменную то что  в хранилище localStorage.getItem("login");
let storage = localStorage.getItem("login")


navButtonForm.addEventListener("click", function (event) {
    event.preventDefault();
    modalForm.classList.add("modal-form-show");
    //Когда показывается форма, то проверяется значение из хранилища storage,
    //если уже вводили логин , то это попадает в formLogin.

    if (storage) {
        formPass.focus();
        formLogin.value = storage;
         //Пусть тогда будет фокус на password

    }

})
closeForm.addEventListener("click", function (event) {
    event.preventDefault();
    //При закрытии по крестику удаляю классы
    modalForm.classList.remove("modal-form-show")
    modalForm.classList.remove("modal-error")
})
navButton.addEventListener("click", function (event) {
    event.preventDefault();
    // Проверяю нажата ли была уже кнопка меню , если да, то удаляю класс и меню пропадает
    if (navPopup.classList.contains("navigation-popup-show")){
        navPopup.classList.remove("navigation-popup-show");
    }else {
        //Показываю меню
        navPopup.classList.add("navigation-popup-show");
    }

})
closeNav.addEventListener("click", function (event) {
    event.preventDefault();
    navPopup.classList.remove("navigation-popup-show");
    //Удаляю класс  у навигации если нажат крестик
})
mapForm.addEventListener("submit", function (event) {

    //Проверяю есть ли в поле логин и в поле пароль что-то(value) метод возвращает строку в поле
    if (!formLogin.value || !formPass.value){
        event.preventDefault();
        //Если ничего не ввели и нажали на кнопку войти , специальное событие submit
        //то накидываю класс на форму error , чтобы была анимация тряска
        modalForm.classList.add("modal-error");

    }else {
        localStorage.setItem("login", formLogin.value); //то что ввели в поле login
        //запишется в хранилище под ключем login
    }
})
//получаю обработчик клика от окна , если нажат ESC, его код 27 то удаляю классы
window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (modalForm.classList.contains("modal-form-show")) {
            modalForm.classList.remove("modal-form-show");
            modalForm.classList.remove("modal-error");
        }
    }
})





