/*document.addEventListener("DOMContentLoaded", function(event) { 
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    } 
    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal);
    });

    closeBtn.addEventListener('click', switchModal);
    window.onclick =function(event) {
        if (event.target == modal) {
            modal.classList.toggle('modal--visible');
        }
    }
    // Нерабочая клавиша Esc
     document.addEventListener ('keypress', function (e) {
        if (e.code == 'Backquote') {
            modal.classList.toggle('modal--visible');
        }
      }); 
}); */



$(document).ready(function () {
    // Настройка модального окна
    var modal = $('.modal'), 
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close'),
        switchModal = () => {
            modal.toggleClass('modal--visible');
        } ;
    modalBtn.on('click', switchModal );
    closeBtn.on('click', switchModal);
    
    // пропадает (и почему то появляется) при нажатии на Esc
    $(document).keyup(function (e) {
        if (e.key === "Escape") {
            modal.removeClass('modal--visible');
        }
    });
    // Скрывает модально окно при нажатии вне него
    $(document).click(function (event) {
        if ($(event.target).is('.modal')) {
            modal.toggleClass('modal--visible');
        }
    });

        // Слайдер

    const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

    // Настройка навигации слайдера
    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');
    next.css('left', prev.width() + 10 + bullets.width() +10);
    bullets.css('left', prev.width() + 10);


    // Прокрутка наверх
    $(function() {
      // при нажатии на кнопку scrollup
      $('.scrollup').click(function() {
        // переместиться в верхнюю часть страницы
        $("html, body").animate({
          scrollTop:0
        },1000);
      })
    })
    // при прокрутке окна (window)
    $('.scrollup').fadeOut();
    $(window).scroll(function() {
      // если пользователь прокрутил страницу более чем на 200px
      if ($(this).scrollTop()>200) {
        // то сделать кнопку scrollup видимой
        $('.scrollup').fadeIn();
      }
      // иначе скрыть кнопку scrollup
      else {
        $('.scrollup').fadeOut();
      }
    });
    // прокрутка вниз
    $(function() {
      // при нажатии на кнопку scrollup
      $('.hero__scroll-down').click(function() {
        // переместиться в верхнюю часть страницы
        $("html, body").animate({
          scrollTop:10000
        },1);
      })
    })

    // Анимация
    new WOW().init();

    // Валидация формы
    $('.modal__form').validate({
      rules: {
        // simple rule, converted to {required:true}
        userName: "required",
        // compound rule
        userEmail: {
          required: true,
          email: true
        }
      }
    });
});