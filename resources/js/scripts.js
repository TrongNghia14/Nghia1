$(document).ready(
    function(){

        // sticky nav
        $('.about-section').waypoint(
            function(direction){
                if(direction == "down"){
                    $('nav').addClass('sticky');    /* khi kéo xuống sẽ thực hiện thêm class sticky */
                }else{
                    $('nav').removeClass('sticky'); /* Khi kéo lên lại sẽ thực hiện bỏ đi class sticky */
                }
            }, {
                offset: '600px' /* khi đến vị trí cách ABOUT một khoảng đc cho thì hiệu ứng ở phần sticky sẽ được kích hoạt */
            }
        )

        //scroll: khi scroll sẽ có hiệu ứng
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 700);// số 700 là thời gian scroll (1000 = 1s)
            event.preventDefault();
        });

        //mobile navgation
        $('.mobile-nav-icon').click(
            function(){
                $('.main-nav').slideToggle(200);  //khi chúng ta thực hiện việc click thì "slideToggle" sẽ thực hiện chức năng biến "display: none" thành "display: block" của thằng "main-nav"
                
                if($('.mobile-nav-icon').hasClass('fa-bars')){ 
                    $('.mobile-nav-icon').addClass('fa-times');     // thêm biểu tượng dấu X
                    $('.mobile-nav-icon').removeClass('fa-bars');   // đồng thời xóa đi biểu tượng 3 dấu gạch dưới
                }else{
                    $('.mobile-nav-icon').addClass('fa-bars');      // ngược lại với cái trên
                    $('.mobile-nav-icon').removeClass('fa-times');  // ngược lại với cái trên
                }
            }
        )
    }
)

/* các dòng code dc tối ưu trên web: javascript-minifier.com
$(document).ready(function(){$(".about-section").waypoint(function(a){"down"==a?$("nav").addClass("sticky"):$("nav").removeClass("sticky")},{offset:"600px"}),$("a").click(function(a){$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top},700),a.preventDefault()}),$(".mobile-nav-icon").click(function(){$(".main-nav").slideToggle(200),$(".mobile-nav-icon").hasClass("fa-bars")?($(".mobile-nav-icon").addClass("fa-times"),$(".mobile-nav-icon").removeClass("fa-bars")):($(".mobile-nav-icon").addClass("fa-bars"),$(".mobile-nav-icon").removeClass("fa-times"))})});
*/