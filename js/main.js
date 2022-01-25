$(function() {

    // catalog slider
    $('.catalog__items').slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    speed: 300,

                    variableWidth: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    //выпадающее меню сортировки по цене
    $(".goods__select-dropdown").click(function(e) {

        let elem = document.querySelector('.goods__select-dropdown .disabled');
        elem.classList.toggle('active');

    });

    //like - wish - сердечко на карточке товара - работает не верно
    $(".goods__product-wish").click(function(e) {

        let elem = document.querySelector('.goods__product-wish');
        elem.classList.toggle('active');

    });

    // submenu-header
    $(".header__submenu").click(function(e) {

        let elem = document.querySelector('.header__menu-items');
        elem.classList.toggle('active');

        let elem2 = document.querySelectorAll('.header__menu-item');
        elem2.forEach(element => element.classList.toggle('active'));

        let elem3 = document.querySelector('body');
        elem3.classList.toggle('active');

        let elem4 = document.querySelector('.header__search');
        elem4.classList.toggle('active');

        let elem5 = document.querySelector('.header__top');
        elem5.classList.toggle('active');

        let elem6 = document.querySelector('.header');
        elem6.classList.toggle('active');

        let elem7 = document.querySelector('.header__submenu');
        elem7.classList.toggle('active');

    });

    // submenu-filter
    $(".goods__filters-link").click(function(e) {

        let elem = document.querySelector('.goods__sidebar');
        elem.classList.toggle('active');

        let elem2 = document.querySelector('.goods__sidebar-title');
        elem2.classList.toggle('active');

        let elem3 = document.querySelector('body');
        elem3.classList.toggle('active');

    });


    // sticky
    var menuDelete = document.getElementById("discount");

    var lastScrollTop = 0;
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            menuDelete.classList.add("disabled");
        } else {
            menuDelete.classList.remove("disabled");
        }
        lastScrollTop = st;
    });

    // КОСТЫЛЬ - будет работать если только один паттерн
    $('input').on('input invalid', function() {
        this.setCustomValidity('')
        if (this.validity.patternMismatch) {
            this.setCustomValidity("Введите номер телефона без букв - от 5 до 10 цифр")
        }
    })

    //проверка галочки при отправке формы
    submit.onclick = function() {
        if (rules.checked) {
            let headingElement2 = document.querySelector('.contact-checkbox-valid');
            headingElement2.style.display = 'none';
        } else {
            let headingElement2 = document.querySelector('.contact-checkbox-valid');
            headingElement2.style.display = 'block';
        }

    }

    //сообщение об удачной отправке

    $(".contact__form").submit(function() {

        let elem = document.querySelector('.contact__form-popup');
        elem.classList.toggle('active');

        let elem2 = document.querySelector('.contact__content');
        elem2.classList.toggle('disabled');

    });


});
