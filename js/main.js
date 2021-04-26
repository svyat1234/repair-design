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

    var workNext = $('.work-swiper-button-next');
    var workPrev = $('.work-swiper-button-prev');
    var workBullets = $('.work-swiper-pagination');
    workNext.css('left', workPrev.width() + 10 + workBullets.width() +10);
    workBullets.css('left', workPrev.width() + 10);


    // Прокрутка наверх
    $(function() {
      // при нажатии на кнопку scrollup
      $('.scrollup').click(function() {
        // переместиться в верхнюю часть страницы
        $("html, body").animate({
          scrollTop:0
        },1100);
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
    function scrollTo(element) {
      window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
        })
      }
      $('.hero__scroll-down').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('.footer__menu').offset().top }, 1000);
        e.preventDefault();
      });

    // Анимация
    new WOW().init();

    // Валидация формы
    $('.modal__form').validate({
      errorClass: "invalid",
      rules: {
        // simple rule, converted to {required:true}
        userName: {
          required: true,
          minlength: 2
        },
        userPhone: "required",
        // compound rule
        userEmail: {
          required: true,
          email: true
        }
      }, // сообщения
      messages: {
        userName: {
          required: "Имя обязательно",
          minlength: "Имя должно быть не короче двух букв"
        },
        userPhone: "Телефон обязателен",
        userEmail: {
          required: "Email обязателен",
          email: "Введите в формате: name@domain.com"
        }
      },
      submitHandler: function(form) {
        $.ajax({
            type: "POST",
            url: "send.php",
            data: $(form).serialize(),
            success: function (response) {
                console.log('Ajax сработал. Ответ сервера:' + response);
                $(form)[0].reset();
                modal.removeClass('modal--visible');
                alert('Форма отправлена, мы свяжемся с вами в течении 15 минут.')
            }
        });
    }
});
    $('.control__form').validate({
      errorClass: "invalid",
      rules: {
        // simple rule, converted to {required:true}
        userName: {
          required: true,
          minlength: 2
        },
        userPhone: "required"
        // compound rule
      }, // сообщения
      messages: {
        userName: {
          required: "Имя обязательно",
          minlength: "Имя должно быть не короче двух букв"
        },
        userPhone: "Телефон обязателен",
      }
    });
    $('.footer__form').validate({
      errorClass: "invalid",
      rules: {
        // simple rule, converted to {required:true}
        userName: {
          required: true,
          minlength: 2
        },

        userQuastion: "required",
        userPhone: "required",
        // compound rule
        userEmail: {
          required: true,
          email: true
        }
      }, // сообщения
      messages: {
        userName: {
          required: "Имя обязательно",
          minlength: "Имя должно быть не короче двух букв"
        },
        userQuastion: "Задайте вопрос",
        userPhone: "Телефон обязателен",
        userEmail: {
          required: "Email обязателен",
          email: "Введите в формате: name@domain.com"
        }
      }
    });


    // Маска для номера телефона
    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});


   

    $('#onProjects').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#toProjects').offset().top }, 1000);
      e.preventDefault();
    });
    $('#onTeam').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#toTeam').offset().top -450}, 1000);
      e.preventDefault();
    });
    $('#onClients').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#toClients').offset().top }, 1000);
      e.preventDefault();
    });
    $('#onContacts').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#toContacts').offset().top }, 1000);
      e.preventDefault();
    });

    var player;
    $('.video__play').on('click', function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '465',
        width: '100%',
        videoId: 'Dw_i6WcmdFY',
        events: {
          'onReady': videoPlay,
        }
      });
    })
  
    function videoPlay(event) {
      event.target.playVideo();
    }
    
});