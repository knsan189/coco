$(document).ready(function () {
    $('.slide_group').slick({
        autoplay: true, // 자동재생
        autoplaySpeed: 4000, // 간격시간
        dots: true, // 동그라미버튼
        speed: 600, // 바뀌는시간(생략가능)
        slidesToShow: 1, // 보여질슬라이드수(생략가능)
        slidesToScroll: 1, // 이동슬라이드수(생략가능)
        pauseOnHover: false, // 마우스오버시 멈춤여부(생략가능)
        pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
        pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
        cssEase: 'linear', // 속도함수(생략가능)
        draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
        fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
        arrows: true, // 좌우화살표 사용여부(생략가능)
        prevArrow: '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
    });
});

$(function () {
    var num = $(this).index();
    $('.cs_board .tabmenu > li').on('click', function () {
        $(this).addClass('active')
            .siblings().removeClass('active')
        $(this).parent().next().children()
            .eq(num).addClass('active')
            .siblings().removeClass('active')
    })
})

$(function () {
    $('.article1 .plpa').on('click', function () {
        var iButton = $(this).children()

        if (iButton.hasClass('fa-pause')) {
            $('.slide_group').slick('slickPause')
            iButton.removeClass('fa-pause')
            iButton.addClass('fa-play')
        } else {
            $('.slide_group').slick('slickPlay')
            iButton.removeClass('fa-play')
            iButton.addClass('fa-pause')

        }
    })
})
// $(function(){
//     var ww = $(window).width()
//     var depth1Li = $('.depth1 > li')
//     if(ww > 1024){
//         depth1Li.hover(
//             function(){
//                 $(this).children('.depth2').addClass('on')
//             },
//             function(){
//                 $(this).children('.depth2').removeClass('on')
//             })
//     }
//     else{
//     var mButton = $('#header button > i')
//     mButton.click(function(){
//         depth1Li.toggleClass('on')
//         if($('.depth1 > li').hasClass('on')){
//             $(this).addClass('fa-times').removeClass('fa-bars')
//         }
//         else{
//             $(this).addClass('fa-bars').removeClass('fa-times')
//         }
//     })
//     depth1Li.click(function(){
//         $(this).children('.depth2').toggleClass('on')
//         $(this).siblings().children('.depth2').removeClass('on')
//     })
//     }
// })

// window.onload = function(){
//     var depth1Li = document.querySelector('.depth1 > li')
//     var nextSiblings = depth1Li.nextElementSibling;

//     while(nextSiblings){
//         console.log(nextSiblings);
//         nextSiblings = nextSiblings.nextElementSibling;
//     }


// }
window.onload = function Navgaitor() {

    var sw = document.body.offsetWidth; // 화면 사이즈
    var mBtn = document.querySelector('#header button > i') // 메뉴 버튼
    var nav = document.getElementById('nav') // 네비게이션
    var depth1Li = document.querySelectorAll('.depth1 > li')

    for (var i = 0; i < depth1Li.length; i++) {
        //PC 환경
        if (sw > 1024) {
            depth1Li[i].addEventListener('mouseover', function () {
                this.children[1].classList.add('on')
            })
            depth1Li[i].addEventListener('mouseout', function () {
                this.children[1].classList.remove('on')
            });

        }

        //모바일 환경
        else{
            mBtn.addEventListener('click', function(){
                if(!(nav.classList.contains('on'))){
                    nav.classList.add('on')
                    this.classList.add('fa-times')
                    this.classList.remove('fa-bars')
                }
                else{
                    nav.classList.remove('on')
                    this.classList.add('fa-bars')
                    this.classList.remove('fa-times')
                }                
            })
            depth1Li[i].addEventListener('click', function(){
                if(!this.children[1].classList.contains('on')){
                    this.children[1].classList.add('on')
                }
                else{
                    this.children[1].classList.remove('on')
                }
                for(var siblings of this.parentNode.children){
                    if(siblings !== this){
                        siblings.children[1].classList.remove('on')
                    }
                }
            })

        }
        
    }
}
