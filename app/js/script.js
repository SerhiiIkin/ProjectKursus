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
    if ($(".modal__btn").length) {
        send();
    };
});

var send = function () {
    var sendBtn = document.querySelector(".modal__btn");
    var form = document.getElementById("form");
    sendBtn.addEventListener("click", function () {
        sendBtn.classList.toggle("btn--finish");
        var spinner = document.querySelector(".modal__btn-place");
        spinner.classList.toggle("spinner");
        sendBtn.innerHTML = "Готово!";
        if ("checkName" == true ) {
            setTimeout('form.submit()',6500);
        };
        })
    };
validateForm = function () {
    return checkName();

};
function checkName() {
        var mail = document.getElementById("mail");
        var x = document.form;
        var input = x.mail.value;
        var errMsgHolder = document.getElementById('nameErrMsg');
        if (input.length < 5) {
            errMsgHolder.innerHTML =
                'Please enter a email with at least 5 letters';
            return false;
        } else if (!(/^\S{3,}$/.test(input))) {
            errMsgHolder.innerHTML =
                'Email cannot contain whitespace';
            return false;
        }else if(!(/^[a-zA-Z]+$/.test(input)))
        {
            errMsgHolder.innerHTML=
                    'Only alphabets allowed'
        }
        else if(!(/^(?:(\w)(?!\1\1))+$/.test(input)))
        {
            errMsgHolder.innerHTML=
                    'per 3 alphabets allowed'
        }
        else {
            errMsgHolder.innerHTML = '';
            return undefined;
        }
    }

// var sendCheck = function () {
//     const form = document.getElementById("form");
//     var email = document.getElementById("mail");
//     var mobTel = document.querySelector("tel");
//     var mobTelError = document.querySelector("tel + span.error");
//     var emailError = document.querySelector('mail + span.error');
//
//var First=document.getElementById("tel").value;
//     var v = document.createElement("span");
//     v.appendChild(document.createTextNode(First));
//     document.getElementById("fd").appendChild(v);

//     mobTel.addEventListener("input", function (event) {
//         if (mobTel.validity.valid) {
//             mobTelError.textContent = '';
//             mobTelError.className = 'error';
//         } else {
//             showError();
//         }
//     });

//     email.addEventListener('input', function (event) {
//         if (email.validity.valid) {
//             emailError.textContent = '';
//             emailError.className = 'error';
//         } else {
//             showError();
//         }
//     });

//     form.addEventListener('submit', function (event) {
//         if (!email.validity.valid) {
//             // Если поле email не валидно, отображаем соответствующее сообщение об ошибке
//             showError();
//             // Затем предотвращаем стандартное событие отправки формы
//             event.preventDefault();
//         }
//         if (!mobTel.validity.valid) {
//             showError();
//             event.preventDefault();
//         }
//     });

//     function showError() {
//         if (mobTel.validity.valueMissing) {
//             mobTelError.textContent = "You need to enter mobile telefon.";
//         }
//         else
//             if (mobTel.validity.typeMismatch) {
//                 mobTelError.textContent = 'Entered value needs to be an mobile telefon.';
//             }
//             else
//                 if (mobTel.validity.tooShort) {
//                     mobTelError.textContent = `Mobil telefon should be at least ${ mobTel.minLength } characters; you entered ${ mobTel.value.length }.`;
//                 }
//                 mobTelError.className = 'error active';
//         if(email.validity.valueMissing) {
//         // Если поле пустое,
//         // отображаем следующее сообщение об ошибке
//         emailError.textContent = 'You need to enter an e-mail address.';
//         } else if(email.validity.typeMismatch) {
//         // Если поле содержит не email-адрес,
//         // отображаем следующее сообщение об ошибке
//         emailError.textContent = 'Entered value needs to be an e-mail address.';
//         }
//         else if(email.validity.tooShort) {
//         // Если содержимое слишком короткое,
//         // отображаем следующее сообщение об ошибке
//         emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
//         }
//         // Задаём соответствующую стилизацию
//         emailError.className = 'error active';
//     };

//     var error = email;
//     while ((error = error.nextSibling).nodeType != 1);

// // Согласно спецификации HTML5
// const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// // Многие устаревшие браузеры не поддерживают метод `addEventListener`
// // Есть простой способ заменить его; и далеко не единственный
// function addEvent(element, event, callback) {
//     var previousEventCallBack = element["on"+event];
//     element["on"+event] = function (e) {
//     var output = callback(e);

//     // Колбэк, который возвращает `false`, останавливает цепочку колбэков
//     // и прерывает выполнение колбэка события
//     if (output === false) return false;

//         if (typeof previousEventCallBack === 'function') {
//         output = previousEventCallBack(e);
//         if(output === false) return false;
//         }
//     }
//     };

//     addEvent(window , "load" , function () {
//   // Проверка, является ли поле пустым (помните, оно не являтеся обязательным)
//   // Если поле не пустое, проверяем содержимое на соответствует шаблону email
//     var test = email.value.length === 0 || emailRegExp.test(email.value);

//     email.className = test ? "valid" : "invalid";
//     });

//     addEvent(email, "input", function () {
//     var test = email.value.length === 0 || emailRegExp.test(email.value);
//     if (test) {
//     email.className = "valid";
//     error.textContent = "";
//     error.className = "error";
//     } else {
//     email.className = "invalid";
//     }
//     });
//     addEvent(form, "submit", function () {
//     var test = email.value.length === 0 || emailRegExp.test(email.value) || mobTel.value.length === 0;

//     if (!test) {
//     email.className = "invalid";
//     error.textContent = "I expect an e-mail, darling!";
//     error.className = "error active";
//     // Некоторые устаревшие браузеры не поддерживают метод event.preventDefault()
//     return false;
//     } else {
//     email.className = "valid";
//     error.textContent = "";
//     error.className = "error";
//     }
//     });
// };



var aboutSlide = function () {
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

var modal = function() {
    var openMod = document.querySelector(".services__button");
    openMod.addEventListener("click", function openModW() {
        modalWin = document.querySelector(".modal");
        modalWin.classList.remove("close");
        modalWin.classList.toggle("open");
        document.body.classList.toggle("lock");
    })
    var closeMod = document.querySelector(".modal__close");
    closeMod.addEventListener("click", function closeModalW() {
        modalWin.classList.toggle("close");
        modalWin.classList.remove("open");
        document.body.classList.remove("lock");
    })
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

