$(document).ready(function () {
    if ($(".slide-js-achievement").length) {
        aboutSlide();
    }
    if ($(".consecutive-wrapper").length) {
        window.addEventListener("load", checkSizeWindow);
        window.addEventListener("resize", checkSizeWindow);
    }
    if ($(".middle-slider").length) {
        indexSlideMid();
    }
    if ($(".header__burger-menu").length) {
        menu();
    }
    if ($(".consecutive__button").length) {
        conSlide();
    }
    if ($(".services__button").length) {
        modal();
    }
    if ($(".modal__btn").length) {
        check();
    }
    if ($(".button__ukr").length) {
        ukrLand();
    }
});
function indexSlideTop() {
    $(".consecutive-wrapper").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        dotsClass: "dots-style",
    });
}
function checkSizeWindow() {
    if (window.innerWidth >= 992) {
        destroy();
    }
    if (window.innerWidth < 992) {
        indexSlideTop();
    }
}
function destroy() {
    $(".consecutive-wrapper").slick("destroy");
}
function check() {
    var mobTel = document.getElementById("tel");
    var email = document.getElementById("email");
    var sendBtn = document.querySelector(".modal__btn");
    sendBtn.addEventListener("click", function checkForm() {
        event.preventDefault();
        if (!email.value && !mobTel.value) {
            mobTel.style.outline = " 1px solid red";
            email.style.outline = " 1px solid red";
            var newDiv = document.createElement("div");
            newDiv.style = "position:absolute; color:red; font-size:14px;";
            var newContent = document.createTextNode(
                "Ведите номер телефона или email!"
            );
            newDiv.appendChild(newContent);
            email.insertAdjacentElement("afterend", newDiv);
            setTimeout(() => {
                newDiv.remove();
            }, 2000);
        }
        if (email.value || mobTel.value) {
            mobTel.style.outline = " 1px solid white";
            email.style.outline = " 1px solid white";
            send();
            setTimeout(sub, 6000);
        }
    });
}
function sub() {
    var form = document.getElementById("form");
    form.submit();
}
function send() {
    var sendBtn = document.querySelector(".modal__btn");
    var modText = document.querySelector(".modal__text");
    var modSnip = document.querySelector(".modal__snip");
    var modReady = document.querySelector(".modal__ready");
    modText.classList.toggle("hid");
    sendBtn.classList.remove("btn--blue");
    sendBtn.classList.toggle("snip");
    modSnip.classList.toggle("visib");
    modSnip.classList.toggle("spinner");
    setTimeout(() => {
        modSnip.classList.toggle("hid");
        modSnip.classList.remove("visib");
        sendBtn.classList.toggle("ready");
        modSnip.classList.remove("visib");
        modReady.classList.toggle("visib");
    }, 5000);
}

function aboutSlide() {
    $(".slide-js-achievement").slick({
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
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
    });
}

var indexSlideMid = function () {
    $(".middle-slider").slick({
        infinite: true,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "dots-style dots-style--middle",
    });
};

var menu = function () {
    menuBurger = document.querySelector(".header__burger-menu");
    menuBurger.addEventListener("click", openNav);
    function openNav() {
        list = document.querySelector(".header__burger-menu-button");
        list.classList.toggle("activet");
        meny = document.querySelector(".header__menu");
        meny.classList.toggle("vis");
        document.body.classList.toggle("lock");
    }
};

function modal() {
    var openMod = document.querySelector(".services__button");
    var modalWin = document.querySelector(".modal");
    var closeMod = document.querySelector(".modal__close");
    var nyDiv = document.createElement("div");
    function getCoords() {
        var cord = modalWin.getBoundingClientRect();
        return {
            top: cord.height / 2 + scrollY,
        };
    }
    function createScroll() {
        nyDiv.style.cssText = "position:absolute;";
        var coords = getCoords(modalWin);
        nyDiv.style.top = coords.top + "px";
        document.body.append(nyDiv);
        nyDiv.scrollIntoView({ block: "center" });
        nyDiv.remove();
    }
    function getCoordsModal() {
        var scrM = window.scrollY;
        modalWin.style.top = scrM + "px";
    }
    function closeModalW() {
        modalWin.classList.toggle("close");
        modalWin.classList.remove("open");
        document.body.style.overflow = "";
    }
    function openModW() {
        modalWin.classList.remove("close");
        modalWin.classList.toggle("open");
        getCoordsModal();
        createScroll();
        document.body.style.overflow = "hidden";
    }
    openMod.addEventListener("click", openModW);
    closeMod.addEventListener("click", closeModalW);
}

function conSlide() {
    var allBtn = document.querySelectorAll(".consecutive__button");
    var blocks = document.querySelectorAll(".consecutive__slide");
    allBtn.forEach(onTabClick);
    allBtn[0].click();
    function onTabClick(item) {
        item.addEventListener("click", function () {
            var currentBtn = item;
            var tabId = currentBtn.getAttribute("data-tab");
            var currentTab = document.querySelector(tabId);
            if (!currentBtn.classList.contains("red")) {
                allBtn.forEach(function (item) {
                    item.classList.remove("red");
                });
                blocks.forEach(function (item) {
                    item.classList.remove("block-open");
                });
                currentBtn.classList.add("red");
                currentTab.classList.add("block-open");
            }
        });
    }
}
function ukrLand() {
    $(".button__ukr").click();
}
function rusLand() {
    $(".button__rus").click();
}
function enLand() {
    $(".button__en").click();
}
$(".button__ukr").click(function () {
    $(".button__ukr").toggleClass("current__lang");
    $(".button__rus").removeClass("current__lang");
    $(".button__en").removeClass("current__lang");
    var ukrLang = document.getElementsByClassName("ukr__lang");
    var rusLang = document.getElementsByClassName("rus__lang");
    var enLang = document.getElementsByClassName("en__lang");
    if ($(".button__ukr").hasClass("current__lang")) {
        $("#name").attr("placeholder", "Iм'я");
        $("#messege").attr("placeholder", "Повiдомлення");
        $("#tel").attr("placeholder", "Номер телефона");
        $("#email").attr("placeholder", "Чи email");
    }
    for (i = 0; i < ukrLang.length; i++) {
        ukrLang[i].style.display = "initial";
        rusLang[i].style.display = "none";
        enLang[i].style.display = "none";
    }
});

$(".button__rus").click(function () {
    var ukrLang = document.getElementsByClassName("ukr__lang");
    var rusLang = document.getElementsByClassName("rus__lang");
    var enLang = document.getElementsByClassName("en__lang");
    $(".button__ukr").removeClass("current__lang");
    $(".button__rus").toggleClass("current__lang");
    $(".button__en").removeClass("current__lang");
    if ($(".button__rus").hasClass("current__lang")) {
        $("#name").attr("placeholder", "Имя");
        $("#messege").attr("placeholder", "Cообщение");
        $("#tel").attr("placeholder", "Номер телефона");
        $("#email").attr("placeholder", "Или email");
    }
    for (i = 0; i < rusLang.length; i++) {
        ukrLang[i].style.display = "none";
        rusLang[i].style.display = "initial";
        enLang[i].style.display = "none";
    }
});

$(".button__en").click(function () {
    var ukrLang = document.getElementsByClassName("ukr__lang");
    var rusLang = document.getElementsByClassName("rus__lang");
    var enLang = document.getElementsByClassName("en__lang");
    $(".button__ukr").removeClass("current__lang");
    $(".button__rus").removeClass("current__lang");
    $(".button__en").toggleClass("current__lang");
    if ($(".button__en").hasClass("current__lang")) {
        $("#name").attr("placeholder", "Name");
        $("#messege").attr("placeholder", "Messages");
        $("#tel").attr("placeholder", "Phone number");
        $("#email").attr("placeholder", "Or email");
    }
    for (i = 0; i < enLang.length; i++) {
        ukrLang[i].style.display = "none";
        rusLang[i].style.display = "none";
        enLang[i].style.display = " initial";
    }
});
