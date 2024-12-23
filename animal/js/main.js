$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        effect: "fade", /* fade 효과 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_wrap .next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_wrap .prev',  
        },

    });
    // swiper.autoplay.stop();  /* 일시정지 기능 */
    // swiper.autoplay.start();  /* 재생 기능 */

    
    $('.visual .btn_wrap .stop').on('click', function(){
        //console.log('정지버튼 누름')
        visual_swiper.autoplay.stop();
        $(this).hide()//stop버튼 숨김
        $('.visual .btn_wrap .play').show()
    })
    $('.visual .btn_wrap .play').on('click', function(){
        //console.log('시작버튼 누름')
        visual_swiper.autoplay.start();
        $(this).hide()
        $('.visual .btn_wrap .stop').show()//stop 버튼 나타남
    })

})