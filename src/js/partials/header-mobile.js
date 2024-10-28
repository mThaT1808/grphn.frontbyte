(function () {
    var burgers = document.querySelectorAll('.b-burger');
    var nav = document.querySelector('.b-header__functional');

    for (let i = 0; i < burgers.length; i++) {
        burgers[i].addEventListener("click", function () {
            nav.classList.toggle('b-header__functional--open');
        })
    }

    var languageButtons = document.querySelectorAll(".b-language__button");

    for (let i = 0; i < languageButtons.length; i++) {
        languageButtons[i].addEventListener("click", languageButtonHandler)
    }

    function languageButtonHandler (e) {
        for (let i = 0; i < languageButtons.length; i++) {
            languageButtons[i].classList.remove("b-language__button--active")
        }
        e.target.classList.add("b-language__button--active")
    }

    const pageWrapper = document.querySelector(".b-page-wrapper");
    pageWrapper.addEventListener('scroll', function () {
        const header = document.querySelector('.b-header');
        if (pageWrapper.scrollTop > 70) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
})();
