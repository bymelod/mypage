$(function(){
    $('.header').load('../inc/header.html')


// 상단으로 가기 버튼
    $(window).scroll(function () {
        var scrollTopValue = $(document).scrollTop()

        if (scrollTopValue > 700) {
            $('.go_top').fadeIn()
        } else {
            $('.go_top').fadeOut()
        }
    })

    $('.go_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 'fast')
    })


// web페이지 탭
  $('.menu li').eq(0).addClass('active')
    $('.tab_content').hide().eq(0).show()

    $('.menu li').click(function () {
        $('.menu li').removeClass('active')
        $(this).addClass('active')

        $('.tab_content').hide()

        var idx = $(this).index()
        $('.tab_content').eq(idx).show()
    })


})