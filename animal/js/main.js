$(document).ready(function(){
    
    let device_status //브라우저가 pc인지 mobile상태인지 
    let window_w
    let scrolling //브라우저가 스크롤 된 값
    let tab_name //find의 클릭한 tab의 이름
    /***************visual 팝업 (시작)******************/
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
    /***************visual 팝업 (종료)******************/
    /***************pc/mobile 구분 (시작)****************/
    function device_chk(){
        window_w = $(window).width()
        if(window_w > 640){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        //console.log(device_status)
    }
    $(window).resize(function(){//브라우저가 리사이즈 될 때 한번 실행
        device_chk()
    })

    device_chk() //로딩됐을 때 1번만 실행
    /***************pc/mobile 구분 (시작)****************/
    /***************header 고정 (시작)******************/
    /*
    언제: 스크롤할 떄, header에 마우스를 올렸을 때
    무엇을: header에 fixed 클래스를 줌
        ㄴ사라질때: 맨 위로 스크롤 되었을 때, header에서 마우스를 아웃했을 때 ---> 스크롤을 내린 상태에서 header에 마우스를 올렸다 내림(fixed가 사라지면x)
    */

    $('header').on('mouseenter', function(){
        $(this).addClass('fixed')
    })
    $('header').on('mouseleave', function(){
        //스크롤을 내린 상태에서 마우스를 오버했다가 아웃하면 header에 클래스가 사라짐
        //스크롤 된 값이 0이거나 0보다 작을 때만 삭제
        if(scrolling <= 0){    
            if($(this).hasClass('sch_open')==false){
            $(this).removeClass('fixed')
        }}
    })

    function scroll_chk(){
        scrolling = $(window).scrollTop()
        //console.log(scrolling)
        if(scrolling > 0){ //스크롤을 내렸을 때
            $('header').addClass('fixed')
        }else if(($('header').hasClass('sch_open')==false) && ($('header').hasClass('menu_pc')==false)){ //맨꼭대기
                /*검색이 열려있는 상태에서는 class 삭제x--->header에 sch_open클래스가 있으면 열린 상태 */
                $('header').removeClass('fixed')
        }
    }
    scroll_chk() //함수의 실행 - 로딩된 후 1번
    $(window).scroll(function(){
        scroll_chk() //스크롤 될 때마다 1번씩 실행
    })  

    /***************header 고정 (종료)******************/  

    /***************검색창 열기 (시작)****************/

    /*.header .tnb .search .search_open 을 클릭하면 header에 sch_open 추가
       .header .tnb .search .search_wrap .search_close를 클릭하면 header에 sch_open 삭제
        .header.sch_open::after/before 한테는 클릭이벤트 발생x
    */

    $('header .tnb .search .search_open').on('click', function(){
        $('header').addClass('sch_open')
        $('header').addClass('fixed')
    })
    $('header .tnb .search .search_wrap .search_close').on('click', function(){
        $('header').removeClass('sch_open')
    })

    /***************검색창 열기 (종료)****************/

    /****************pc버전 메뉴 열기 (시작)******************/
    /*header .gnb .gnb_wrap ul.depth1 > li
        오버한 li에 over 클래스 추가    
        header에 menu_pc 클래스 추가

    */

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status = 'pc'){
            //이전에 오버했던 메뉴의 over를 삭제하기 위해서 모든 li의 over를 지웠다가 오버한 애만 추가
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $(this).addClass('over')
            $('header').addClass('menu_pc')
            $('header').addClass('fixed')
            //console.log('오버')
        }
    })
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
        $('header').removeClass('menu_pc')
        //console.log('아웃')
    })
    
    $('header .gnb .gnb_wrap ul.depth1 > li:last-child ul.depth2 > li:last-child').on('focusout', function(){
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
        $('header').removeClass('menu_pc')
        //console.log('포커스')
    })


    /****************pc버전 메뉴 열기 (종료)******************/
    
    /********************mobile버전 메뉴 열기 (시작)********************/
    /*
        header .gnb .gnb_open을 클릭하면 header에 menu_mo 클래스 추가
        header .gnb .gnb_close를 클릭하면 header에서 menu_mo 클래스 삭제
    */

    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_mo')
        $('html, body').css({overflow : 'hidden', height : $(window).height()}).bind('scroll touchmove mousewheel', function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    
    //console.log('실행됨')
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_mo')
        $('html, body').css({overflow : 'visible', height : 'auto'}).unbind('scroll touchmove mousewheel');
    })

    /********************mobile버전 메뉴 열기 (종료)********************/

    /********************mobile 2차메뉴 열기(시작) ********************/
    /*
        li를 클릭할 것이냐 a를 클릭할 것이냐 ---->a를 클릭
        =====>2차 메뉴가 있는 1차 메뉴는 하위 메뉴를 여는 기능을 가짐 (자기 자신의 href는 작동x)
        =====>2차 메뉴를 가지고 있는 1차 메뉴인지 구분
        header .gnb .gnb_wrap ul.depth1 > li:has(ul.depth2) > a
        1차 메뉴 li에 open이라는 클래스 추가 

        1.클릭한 메뉴만 열리고 다른 메뉴는 모두 닫기
        2.이미 열려있는 메뉴를 다시 클릭하면 닫기
        메뉴를 클릭했을 때 이미 열려있는 메뉴(나만 닫기) or 닫혀있는 메뉴(나머지 다 닫고 나만 열기)
    */

    $('header .gnb .gnb_wrap ul.depth1 > li:has(ul.depth2) > a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault();//href 작동을 막는 코드
            if($(this).parent().hasClass('open')==false){ //열린 메뉴가 아닌 경우
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $(this).parent().addClass('open')
            }else{ //열린 메뉴인 경우
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
            }
        }
    })

    /********************mobile 2차메뉴 열기(종료) ********************/

    /*********************찾습니다/가족을 (시작)**********************/

    const find_panel01 = new Swiper('.find .panel01 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            641: {   /* 1024px 이상일때 적용 */
                slidesPerView: 4,
                spaceBetween: 24,
            }
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.find .tab_content .panel01 .btn_wrap button.next',
            prevEl: '.find .tab_content .panel01 .btn_wrap button.prev',
        }
    })
    const find_panel02 = new Swiper('.find .panel02 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            641: {   /* 1024px 이상일때 적용 */
                slidesPerView: 4,
                spaceBetween: 24,
            }
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.find .tab_content .panel02 .btn_wrap button.next',
            prevEl: '.find .tab_content .panel02 .btn_wrap button.prev',
        }
    })
    /**************************찾습니다/가족을 팝업(종료)***************************/

    /*************************찾습니다/가족을 탭 기능(시작)**************************/
    /*
        --.find .tab_list ul li 버튼을 누른 후 하는 일--
        li에 active 클래스 추가
        li button에 title="선택됨" 입력
        li에 data-tab의 값을 가져와서 .tab_content .tab_panel 중에서 data-tab 값이 같은 요소를 찾아서 active 클래스 추가
    */

    $('.find .tab_list ul li').on('click', function(){
        $('.find .tab_list ul li').removeClass('active')
        $(this).addClass('active')
        $('.find .tab_list ul li button').attr('title', '')
        $(this).find('button').attr('title', '선택됨')
        tab_name = $(this).attr('data-tab')
        $('.find .tab_content .tab_panel').removeClass('active')
        $('.find .tab_content').find('[data-tab="'+tab_name+'"]').addClass('active')
    })

    /*************************찾습니다/가족을 탭 기능(종료)**************************/
    
})