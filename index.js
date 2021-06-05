var swiper = new Swiper("#swiper-multiples", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: '.fa-chevron-circle-right',
        prevEl: '.fa-chevron-circle-left',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        dynamicBullets: true
    },
    breakpoints: {
        120: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
    }
});


var modal = document.querySelectorAll('.modal-container')
var modal_close = document.querySelectorAll('.modal-close')

modal.forEach((el, indice) => {
    el.setAttribute(`modal-${indice}`, '')

    var e = el.parentElement.querySelector('.btn-souce-code')
    e.addEventListener('click', function() {
        if (!el.classList.contains('active')) {
            el.classList.add('active')
        } else {
            el.classList.remove('active')
        }
    })
});

modal_close.forEach(el => {
    el.addEventListener('click', () => {
        console.log(el.parentElement.parentElement.style.display = 'none')
    })
});

window.addEventListener('click', (event) => {
    modal.forEach(el => {
        if (event.target == el) {
            el.style.display = "none";
        }
    });
})