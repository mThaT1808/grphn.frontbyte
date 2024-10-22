(function () {
    var burgers = document.querySelectorAll('.b-burger');
    var nav = document.querySelector('.b-header__functional');

    for (let i = 0; i < burgers.length; i++) {
        burgers[i].addEventListener("click", function () {
            nav.classList.toggle('b-header__functional--open');
        })
    }
})();
