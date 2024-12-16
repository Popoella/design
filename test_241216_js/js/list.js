$(document).ready(function(){
    //html이 모두 로딩이 되면 그때 단 1번 실행
    let slide_name
    //.tour .list ul li에 마우스를 오버하면 오버한 li에 active 클래스를 추가 >>이전에 오버했던 li에서 active 클래스를 삭제(active클래스는 단 하나의 li에만 들어가야 함)
    //li가 많은데 그중에 마우스를 오버한 li만 찾는 방법-->$(this)-->이벤트 대상 자기자신(주의사항: tour...li a 일 때 this는 a)
    //이전에 오버한 li를 찾는 방법-->오버한 li에 active 클래스를 주기 전에 모든 li의 active클래스를 지우면 됨
    
    $('.tour .list ul li').on('mouseenter', function(){
        $('.tour .list ul li').removeClass('active') //모든 li의 active 클래스 삭제
        $(this).addClass('active') //오버한 li에만 active 클래스 추가
    })
    
    $('.biz .list ul li').on('mouseenter', function(){
        $('.biz .list ul li').removeClass('active') //모든 li의 active 클래스 삭제
        $(this).addClass('active') //오버한 li에만 active 클래스 추가
    })

    /* 
        .banner .list ul li에 마우스를 오버하기 전에는 클래스가x
        li에 마우스를 오버하면 오버한 li는 on 클래스 추가
        나머지 li는 off클래스 추가

        li에서 완전 벗어나면 모든 li의 on/off 클래스를 삭제
    */
    $('.banner .list ul li').on('mouseenter', function(){
        $('.banner .list ul li').removeClass('on')
        $('.banner .list ul li').addClass('off')
        $(this).addClass('on')
        $(this).removeClass('off')
    })

    $('.banner .list ul li').on('mouseleave', function(){
        $('.banner .list ul li').removeClass('on')    
        $('.banner .list ul li').removeClass('off')    
    })

    // slide_name=$('.slide .list ul li:nth-child(2)').attr('data-status')
    // console.log(slide_name)

    // $('.slide .list ul li').attr('data-status', 'test')
    /*
        .slide .list ul li에 data-status 속성에 오버하면
        li는 on값을, 오버하지 않은 
        */

    $('.slide .list ul li').on('mouseenter', function(){
        $('.slide .list ul li').attr('data-status', 'off')
        $(this).attr('data-status', 'on')
    /* attr은 기존값을 삭제하고 새로 입력한 값만 들어감 */
    /* 오버한 li에는 off가 있었지만 this로 오버한 li에 기존값을 지우고 on이 입력됨 */
    })
    $('.slide .list ul li').on('mouseleave', function(){
        $('.slide .list ul li').attr('data-status','')
    })
})
