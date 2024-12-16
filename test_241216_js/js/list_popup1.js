$(document).ready(function(){
    const swiper = new Swiper('.book .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 3, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            1300: {    /* 1280px 이상일때 적용 */
                slidesPerView: 4, /*감싸고 있는 swiper의 넓이를 기준으로 몇개가 나올 것 인지*/
                spaceBetween: 24, /*li와 li사이의 여백*/
            },
        },
        centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });
    const story_swiper = new Swiper('.story .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            1300: {    /* 1280px 이상일때 적용 */
                slidesPerView: 'auto', /*감싸고 있는 swiper의 넓이를 기준으로 몇개가 나올 것 인지*/
                /*perview를 auto로 하면 반드시 css에서 li넓이값을 줘야 함*/
                spaceBetween: 24, /*li와 li사이의 여백*/
                centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
            },
        },
        centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });
    const news_swiper = new Swiper('.news .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            1300: {    /* 1280px 이상일때 적용 */
                slidesPerView: 4, /*감싸고 있는 swiper의 넓이를 기준으로 몇개가 나올 것 인지*/
                /*perview를 auto로 하면 반드시 css에서 li넓이값을 줘야 함*/
                spaceBetween: 24, /*li와 li사이의 여백*/
            },
        },
        centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });
    
})