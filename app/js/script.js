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
$('.consecutive-wrapper').slick({
    infinite: true,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "dots-style",
});
$('.middle-slider').slick({
    infinite: true,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "dots-style dots-style--middle",
});
var menu = function Menu(menuBurger,list,meny) {
    menuBurger = document.querySelector(".header__burger-menu");
    menuBurger.addEventListener("click", function openNav() {
    list = document.querySelector(".header__burger-menu-button");
    list.classList.toggle("activet");
    meny = document.querySelector(".header__menu");
    meny.classList.toggle("vis");
    document.body.classList.toggle("lock");
});
}
menu();
var modal = function Modal() {
    const openMod = document.querySelector(".services__button");
    openMod.addEventListener("click", function openModW() {
    modalWin = document.querySelector(".modal");
    modalWin.classList.remove("close");
    modalWin.classList.toggle("open");
    document.body.classList.toggle("lock");
    })
    const closeMod = document.querySelector(".modal__close");
    closeMod.addEventListener("click" , function closeModalW() {
    modalWin.classList.toggle("close");
    modalWin.classList.remove("open");
    document.body.classList.remove("lock");
    })
}
var slideHoved = function SlideHoved() {
const hslider = document.querySelectorAll(".consecutive__button");
const blocks = document.querySelectorAll(".consecutive__block");
for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    for (let index = 0; index < hslider.length; index++) {
        const hslide = hslider[index];
        hslide.addEventListener("click", function () {
            block.classList.remove("block-open");
            hslider[index].classList.toggle("white");
            hslider[i].classList.remove("red");
        });
    }
}
hslider[0].addEventListener("click", function () {
    blocks[0].classList.toggle("block-open");
    hslider[0].classList.remove("white");
    hslider[0].classList.toggle("red");
});
hslider[1].addEventListener("click", function () {
    blocks[1].classList.toggle("block-open");
    hslider[1].classList.toggle("red");
    hslider[1].classList.remove("white");
});
hslider[2].addEventListener("click", function () {
    blocks[2].classList.toggle("block-open");
    hslider[2].classList.toggle("red");
    hslider[2].classList.remove("white");
});
hslider[3].addEventListener("click", function () {
    blocks[3].classList.toggle("block-open");
    hslider[3].classList.toggle("red");
    hslider[3].classList.remove("white");
});
}
var src = window.location.href;
if (src == "http://localhost:3000/services.html") {
    modal();
} else
if (src == "http://localhost:3000/index.html" || "http://localhost:3000" ) {
    slideHoved();
}