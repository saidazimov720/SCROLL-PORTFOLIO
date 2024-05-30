document.querySelectorAll('.slider').forEach((n, i) =>{
    window[`slider${i+1}`]=new Swiper(n, {
        freeMode: true,
        centeredSlides: true,
        direction:'vertical',
        mousewheel: true,
        slidesPerView: 1.75,
        sliesOffsetBefore: -125
    })
})

bindSwipers(slider)