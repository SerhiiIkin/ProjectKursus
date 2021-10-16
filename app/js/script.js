$(document).ready(function () {

    if ($('.slide-js-achievement').length) {
        aboutSlide();
    };
    if ($('.consecutive-wrapper').length) {
        var indexSlide = window.addEventListener("resize", function () {
        if (window.innerWidth <= 992) {
            indexSlideTop();
        };
        if (window.innerWidth > 992) {
            $('.consecutive-wrapper').slick('destroy');
        };
    });
    };
    if ($('.middle-slider').length) {
        indexSlideMid();
    };
    if ($('.header__burger-menu').length) {
        menu();
    };
    if ($('.consecutive__button').length) {
        conSlide();
    };
    if ($('.services__button').length) {
        modal();
    };
    if ($('.modal__btn').length) {
    return time();
    };
});



function time() {
    // setTimeout(() => form, 6500);
    return check();
}
function check() {
    var sendBtn = document.querySelector(".modal__btn");
    var mobTel = document.getElementById("tel");
    var email = document.getElementById("email");
    var form = document.getElementById("form");
    form.onsubmit = function formSet() {
        if ((!email.value) && (!mobTel.value)) {
            mobTel.style.outline = " 1px solid red"
            email.style.outline = " 1px solid red"
            return false;
        };
        if ((email.value) || (mobTel.value)) {
            sendBtn.classList.toggle("btn--finish");
            var spinner = document.querySelector(".modal__btn-place");
            spinner.classList.toggle("spinner");
            sendBtn.innerHTML = "Готово!";
        }
        return true;
    }
}
function aboutSlide() {
    $('.slide-js-achievement').slick({
        infinite: true,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dotsClass: "dots-style dots-style--about",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
        ]
    });
}

var indexSlideMid = function () {
    $('.middle-slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "dots-style dots-style--middle",
    });
}

var menu = function() {
    menuBurger = document.querySelector(".header__burger-menu");
    menuBurger.addEventListener("click", function openNav() {
    list = document.querySelector(".header__burger-menu-button");
    list.classList.toggle("activet");
    meny = document.querySelector(".header__menu");
    meny.classList.toggle("vis");
    document.body.classList.toggle("lock");
});
}
function modal() {
    var openMod = document.querySelector(".services__button");
    openMod.addEventListener("click", function openModW() {
        var modalWin = document.querySelector(".modal");
        modalWin.classList.remove("close");
        modalWin.classList.toggle("open");
        document.body.classList.toggle("lock");
    });
    var closeMod = document.querySelector(".modal__close");
    closeMod.addEventListener("click", function closeModalW() {
        var modalWin = document.querySelector(".modal");
        modalWin.classList.toggle("close");
        modalWin.classList.remove("open");
        document.body.classList.remove("lock");
    });
}
var conSlide = function () {
var allBtn = document.querySelectorAll(".consecutive__button");
var blocks = document.querySelectorAll(".consecutive__slide");
    var btnCon = function () {
    var index;
    for ( index = 0; index < allBtn.length; index++) {
        if (index == 0) {
            allBtn[0].addEventListener("click", function () {
            clear();
            allBtn[0].classList.toggle("red");
            blocks[0].classList.toggle("block-open");
            });
            };
        if (index == 1) {
            allBtn[1].addEventListener("click", function () {
            clear();
            allBtn[1].classList.toggle("red");
            blocks[1].classList.toggle("block-open");
            });
            };
        if (index == 2) {

            allBtn[2].addEventListener("click", function () {
            clear();
            allBtn[2].classList.toggle("red");
            blocks[2].classList.toggle("block-open");
            });
            };
        if (index == 3) {
            allBtn[3].addEventListener("click", function () {
            clear();
            allBtn[3].classList.toggle("red");
            blocks[3].classList.toggle("block-open");
            });
            };
    }
    index = 0;
    }
    var clear = function () {
    var i;
        for (i = 0; i < allBtn.length; i++) {
            allBtn[i].classList.remove("red");
            blocks[i].classList.remove("block-open");
        }
    }
btnCon();
}

var indexSlideTop = function () {
    $('.consecutive-wrapper').slick({
    infinite: true,
    mobileFirst:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    dotsClass: "dots-style",
    });
}