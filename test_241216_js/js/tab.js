$(document).ready(function(){

/* 1. 클릭한 .news .tab_list ul li 에 active 클래스 추가 
    2. 클릭한 .news .tab_list ul li button에 title="선택됨" 이라고 써줘야함
    3. 클릭한 .news .tab_list ul li의 data-panel값을 받아서 
        .news tab_contents .tab_pannel중에 data-pannel의 값이 같은 것에 active 클래스 추가
    4. 이전에 오버했던 .news .tab_list ul li 에 active 클래스 삭제 
    5. 이전에 오버했던 .news .tab_list ul li button 에 title="선택됨" 삭제
    6. 이전에 오버했던 .news tab_contents .tab_panneldml active 클래스 삭제 
    
    누구를 클릭했을 때 이벤트가 발생할 것인지
    .news tab_list ul li
    .news tab_list ul li button -->크기는 동일
    >>이미 선택한 것을 누르면 아예 작동하면 안됨
    1. $(this).attr("data-panel") 값과 curr_panel의 값이 같으면 
    2. active 클래스가 있으면 선택된 탭 */

    let curr_panel='news1' //현재 클릭한 패널이름
    let prev_panel //이전에 클릭했던 패널이름(이미 html코딩에서 news1이 선택되어 있음)
    let cont_h //콘텐츠 높이

    $('.news .tab_list ul li').on('click', function(){
        // if($(this).hasClass('active')==false){
        //     console.log('active클래스 없음')
        // }else{
        //     console.log('active클래스 있음')
        // }
        
        if(!$(this).hasClass('active')){
            prev_panel=curr_panel //다른탭을 클릭하자마자 오버되어 있던 탭의 이름을 이전탭이름으로 지정
            curr_panel=$(this).attr('data-panel')
            
            $('.news .tab_list ul li[data-panel="'+prev_panel+'"]').removeClass('active')
            $('.news .tab_list ul li[data-panel="'+prev_panel+'"]').find('button').attr('title', '')
            $('.news .tab_contents .tab_pannel[data-panel="'+prev_panel+'"]').removeClass('active')

            //현재 선택된 패널
            $(this).addClass('active')
            $(this).find('button').attr('title', '선택됨')
            $('.news .tab_contents .tab_pannel[data-panel="'+curr_panel+'"]').addClass('active')
        }

    })

    /*
        tab_contents가 absolute라서 감싸고 있는 요소가 높이를 인식하지 못함
        active클래스가 들어간 button의 높이와 tab_contents의 높이를 합쳐서 ul에 줘야함

        1. 브라우저 사이즈가 리사이즈 될 때 2. 처음 로딩 되었을 때
        --->>active가 들어간 콘텐츠의 높이 계산이 필요함
        
    */

    function notice_h(){
        cont_h=$('.notice .list ul li.active button').height() + $('.notice .list ul li .tab_contents').height()
        $('.notice .list ul').height(cont_h)
    }

    //맨 처음에 로딩되었을 때 한번 실행
    notice_h()
    
    $(window).load(function(){
        console.log('css까지 로딩 된 후')
        notice_h()
    })
    $(window).resize(function(){ //브라우저가 리사이즈 될 때마다
        notice_h()
    })

    $('.notice .list ul li').on('click', function(){
        if($(this).hasClass('active')==false){
            $('.notice .list ul li').removeClass('active')
            $(this).addClass('active')
            cont_h=$(this).find('.tab_contents').outerHeight()
            console.log(cont_h)
            $('.notice .list ul').height(cont_h)
        }
    })



})

