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
    var modal = $('.modal'), 
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close'),
        switchModal = () => {
            modal.toggleClass('modal--visible');
        } ;
    modalBtn.on('click', switchModal );
    closeBtn.on('click', switchModal);
    $(document).keyup(function (e) {
        if (e.key === "Escape") {
            modal.toggleClass('modal--visible');
        }
    });
    $(document).onclick (function (event) {
        if (event.target == modal) {
            modal.toggleClass('modal--visible');
        }
    });
    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');
    next.css('left', prev.width() + 10 + bullets.width() +10);
    bullets.css('left', prev.width() + 10);
});


document.addEventListener("DOMContentLoaded", function(event) { 
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
});