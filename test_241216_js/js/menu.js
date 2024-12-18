$(document).ready(function(){

    let device_status //pc면 pc라는 값이 저장, 모바일이면 mobile 저장
    let window_w 

    function device_chk(){
        window_w = $(window).width()
        if(window_w > 640){//640보다 크면
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        console.log('함수')
    }

    device_chk()//html 문서가 로딩되고 나면 1번 실행
    $(window).resize(function(){//브라우저가 리사이즈 될 때마다 한번 실행
        device_chk()
    })
    /*
        pc버전에서 메뉴에 마우스를 오버하면
        1. header에 menu_pc 클래스를 추가해줘야 함
        2. header .gnb .gnb_wrap ul.depth1 > li 에 active 클래스 추가    

        >>이벤트 대상(마우스 오버 대상) header .gnb .gnb_wrap ul.depth1 >li

    */

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        if(device_status=='pc'){
            $('header').addClass('menu_pc')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('active')
            $(this).addClass('active')
        }
        
    })
    $('header').on('mouseleave focusout', function(){
        $('header').removeClass('menu_pc')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('active')
    })

    /
    $('header .gnb .gnb_wrap ul.depth1 > li:last-child ul.depth2 > li:last-child').on('focusout', function(){
        $('header').removeClass('menu_pc')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('active')
    })

})