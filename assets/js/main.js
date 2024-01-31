
//// * 레이어팝업 * ////   
function openLayer(sGetName){
    var $layer = $("#"+ sGetName);
    $layer.addClass("on");
    document.body.style.overflow = "hidden";
}

function closeLayer(sGetName){
    $("#"+ sGetName).removeClass("on");
    document.body.style.overflow = "auto";
}


$(document).ready(function(){


    //// * 메인페이지 * ////    
    //main PC nav 슬라이드메뉴
    $(".dropdown").bind("mouseenter focusin", function() {
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".dropdown").bind("mouseleave focusout", function() {
        $(this).removeClass("active");
    });

    //ham nav open
     $(".button_container.open").click(function(){
        $('#overlay').addClass('open');
        document.body.style.overflow = "hidden";
        //$('.main_header .header_inner h1').css('z-index','0');
     });

      $(".button_container.close").click(function(){
        $('#overlay').removeClass('open');
        document.body.style.overflow = "auto";
        //$('.main_header .header_inner h1').css('z-index','101');
     });

     //햄버거 메뉴
     (function() {
         var Accordion = function(el, multiple) {
             this.el = el || {};
             this.multiple = multiple || false;

             var link = this.el.find('.link');

             link.on('click', {el: this.el, multiple: this.multiple},this.dropdown)
         }

         Accordion.prototype.dropdown = function(e) {
             var $el = e.data.el;
                 $this = $(this),
                 $next = $this.next();

             $next.slideToggle();
             $this.parent().toggleClass('open');

             if(!e.data.multiple){
                 $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
             }
         }
         var accordion = new Accordion($('#accordion'), false);
     }());

    //Main_tab
    $(".panel li:not("+$(".tab li .active").attr("href")+")").css('display', 'none');

    $(".tab li a").click(function(){
        $(".tab li a").removeClass("active");
        $(this).addClass("active");
        $(".panel li").hide();
        $($(this).attr("href")).show();
        return false;

    });

    //// * 게시판 * ////  
    //1:1문의
    (function() {
        var Accordion3 = function(el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            var link = this.el.find('.link3');

            link.on('click', {el: this.el, multiple: this.multiple},this.dropdown)
        }

        Accordion3.prototype.dropdown = function(e) {
            var $el = e.data.el;
                $this = $(this),
                $next = $this.next();

            $next.slideToggle();
            $this.parent().toggleClass('open');

            if(!e.data.multiple){
                $el.find('.submenu3').not($next).slideUp().parent().removeClass('open');
            }
        }
        var accordion = new Accordion3($('#accordion3'), false);
    }());

    //퍼블에만적용
    //자주묻는 질문
    // (function() {
    //     var Accordion2 = function(el, multiple) {
    //         this.el = el || {};
    //         this.multiple = multiple || false;
    //
    //         var link = this.el.find('.link2');
    //
    //         link.on('click', {el: this.el, multiple: this.multiple},this.dropdown)
    //     }
    //
    //     Accordion2.prototype.dropdown = function(e) {
    //         var $el = e.data.el;
    //             $this = $(this),
    //             $next = $this.next();
    //
    //         $next.slideToggle();
    //         $this.parent().toggleClass('open');
    //
    //         if(!e.data.multiple){
    //             $el.find('.submenu2').not($next).slideUp().parent().removeClass('open');
    //         }
    //     }
    //     var accordion = new Accordion2($('#accordion2'), false);
    // }());


    //// * 회원가입 * ////   
    //비밀번호 보이기
    $('.eyes').on('click',function(){
        $('.input.password').toggleClass('active');

        if( $('.input.password').hasClass('active') == true ){
            $(this).find('.fa-eye').attr('class',"fa fa-eye-slash").parents('.input').find('.password').attr('type',"text");
            }
            else{
                $(this).find('.fa-eye-slash').attr('class',"fa fa-eye").parents('.input').find('.password').attr('type','password');
            }
        });

    //회원가입 Next
    $('.terms_next').click(function(e) {
        $('.terms_area').css('display', 'none');
        $('.confirm_area').css('display', 'block');
        $('info_area').css('display', 'none');
        $('html').scrollTop(0);
        $('body').scrollTop(0);

        });
    $('.confirm_next').click(function(e) {
        $('.terms_area').css('display', 'none');
        $('.confirm_area').css('display', 'none');
        $('.info_area').css('display', 'block');
        $('html').scrollTop(0);
        $('body').scrollTop(0);

        });

    //정보수정 Next
    $('.modify_next').click(function(e) {
        $('.page1').css('display', 'none');
        $('.page2').css('display', 'block');
        $('html').scrollTop(0);
        $('body').scrollTop(0);

        });
    
    //퍼블에만적용
    // //비밀번호 변경
    // $('.password_del').click(function(e) {
    //     $('.password_del_area').css('display', 'none');
    //     $('.password_change').css('display', 'block');
    //     });


    //법정대리인 체크해제
    $('.parentchk').change(function(){
        if($('.parentchk').is(':checked')){
             $('.blocknone').css('display', 'block');
        }else{
             $('.blocknone').css('display', 'none');
        }
    });

    $('.parentchk2').change(function(){
        if($('.parentchk2').is(':checked')){
             $('.blocknone2').css('display', 'block');
        }else{
             $('.blocknone2').css('display', 'none');
        }
    });

    $('.parentchk3').change(function(){
        if($('.parentchk3').is(':checked')){
             $('.blocknone3').css('display', 'block');
        }else{
             $('.blocknone3').css('display', 'none');
        }
    });

    $('.parentchk4').change(function(){
        if($('.parentchk4').is(':checked')){
             $('.blocknone4').css('display', 'block');
        }else{
             $('.blocknone4').css('display', 'none');
        }
    });

    $('.parentchk6').change(function(){
        if($('.parentchk6').is(':checked')){
             $('.blocknone6').css('display', 'block');
        }else{
             $('.blocknone6').css('display', 'none');
        }
    });

    $('.parentchk7').change(function(){
        if($('.parentchk7').is(':checked')){
             $('.blocknone7').css('display', 'none');
        }else{
             $('.blocknone7').css('display', 'block');
        }
    });

    $('.parentchk8').change(function(){
        if($('.parentchk8').is(':checked')){
             $('.blocknone8').css('display', 'block');
             $('.blocknone9').css('display', 'none');
        }else{
             $('.blocknone8').css('display', 'none');
             $('.blocknone9').css('display', 'block');
        }
    });

    $('.parentchk11').change(function(){
        if($('.parentchk11').is(':checked')){
             $('.blocknone11').css('display', 'none');
        }else{
             $('.blocknone11').css('display', 'block');
        }
    });

    $('.parentchk5').change(function(){
        if($('.parentchk5').is(':checked')){
             $('.blocknone5').css('display', 'block');
             $('.areablock').css('display', 'none');

        }else{
             $('.blocknone5').css('display', 'none');
             $('.areablock').css('display', 'block');
        }
    });

    $('.parentchk10').change(function(){
        if($('.parentchk10').is(':checked')){
             $('.blocknone10').css('display', 'block');
             $('.areablock10').css('display', 'none');

        }else{
             $('.blocknone10').css('display', 'none');
             $('.areablock10').css('display', 'block');
        }
    });

    $('.parentchk12').change(function(){
        if($('.parentchk12').is(':checked')){
             $('.blocknone12').css('display', 'none');

        }else{
             $('.blocknone12').css('display', 'block');
        }
    });

    //비회원 체크 영역
    $('.nonmember13').change(function(){
        if($('.nonmember13').is(':checked')){
             $('.blocknone13').css('display', 'block');

        }else{
             $('.blocknone13').css('display', 'none');
        }
    });

    //비회원 교통카드 체크
    $('.chk_card_non01').click(function(){
        $('.chk_card_non01_chk').css('display', 'block');
        $('.chk_card_non01_nonchk').css('display', 'none');
    })
    $('.chk_card_blo01').click(function(){
        $('.chk_card_non01_chk').css('display', 'none');
        $('.chk_card_non01_nonchk').css('display', 'block');
    })

    $('.chk_card_non02').click(function(){
        $('.chk_card_non02_chk').css('display', 'block');
        $('.chk_card_non02_nonchk').css('display', 'none');
    })
    $('.chk_card_blo02').click(function(){
        $('.chk_card_non02_chk').css('display', 'none');
        $('.chk_card_non02_nonchk').css('display', 'block');
    })

    $('.chk_card_non03').click(function(){
        $('.chk_card_non03_chk').css('display', 'block');
        $('.chk_card_non03_nonchk').css('display', 'none');
    })
    $('.chk_card_blo03').click(function(){
        $('.chk_card_non03_chk').css('display', 'none');
        $('.chk_card_non03_nonchk').css('display', 'block');
    })

    //비회원 일반 신청 클릭시 안내문구 사라짐
    $('input[type=radio]').change(function() {

        var rVal = $(this).val();
        if(rVal == 'b1'){
            $('.bllt1').show();
            $('.bllt2').hide();
        }else{
            $('.bllt1').show();
            $('.bllt2').show();
        }

    });

    //이용약관 전체선택,해제
        function allCheckFunc( obj ) {
            $("[name=chk_one]").prop("checked", $(obj).prop("checked") );
    }

        function oneCheckFunc( obj ) {
            var allObj = $("[name=chk_all]");
            var objName = $(obj).attr("name");

            if( $(obj).prop("checked") ){
                checkBoxLength = $("[name="+ objName +"]").length;
                checkedLength = $("[name="+ objName +"]:checked").length;

                if( checkBoxLength == checkedLength ) {
                    allObj.prop("checked", true);
                } else {
                    allObj.prop("checked", false);
                }
            }else{
                allObj.prop("checked", false);
            }
        }

        $(function(){
            $("[name=chk_all]").click(function(){
                allCheckFunc( this );
            });
            $("[name=chk_one]").each(function(){
                $(this).click(function(){
                    oneCheckFunc( $(this) );
                });
            });
        });

   //마이페이지 메인 반응형 보완
   var viewWidth = $( window ).width();

    if(viewWidth < 960){
         $( '.mystep .step_card' ).addClass( "clearfix" );
    }else{
        $( '.mystep .step_card' ).removeClass( "clearfix" );
    }

   $( window ).resize( function() {
       var viewWidth = $( window ).width();

        if(viewWidth < 960){
             $( '.mystep .step_card' ).addClass( "clearfix" );
        }else{
            $( '.mystep .step_card' ).removeClass( "clearfix" );
        }
    } );


    // 고도화 2020년 12월 *************************************************
    //퍼블에만 적용
    // 지역화폐 등록/변경 팝업 라디오버튼 선택
    // $('.modalA_youth_chk1').change(function(){
    //     if($('.modalA_youth_chk1').is(':checked')){
    //         $('.modalA_youth_area1').css('display', 'block');
    //         $('.modalA_youth_area2').css('display', 'none');
    //     }
    // });
    // $('.modalA_youth_chk2').change(function(){
    //     if($('.modalA_youth_chk2').is(':checked')){
    //         $('.modalA_youth_area2').css('display', 'block');
    //         $('.modalA_youth_area1').css('display', 'none');
    //     }
    // });

    // $('.modalB_youth_chk1').change(function(){
    //     if($('.modalB_youth_chk1').is(':checked')){
    //         $('.modalB_youth_area1').css('display', 'block');
    //         $('.modalB_youth_area2').css('display', 'none');
    //     }
    // });
    // $('.modalB_youth_chk2').change(function(){
    //     if($('.modalB_youth_chk2').is(':checked')){
    //         $('.modalB_youth_area2').css('display', 'block');
    //         $('.modalB_youth_area1').css('display', 'none');
    //     }
    // });

    // $('.modalC_youth_chk1').change(function(){
    //     if($('.modalC_youth_chk1').is(':checked')){
    //         $('.modalC_youth_area1').css('display', 'block');
    //         $('.modalC_youth_area2').css('display', 'none');
    //     }
    // });
    // $('.modalC_youth_chk2').change(function(){
    //     if($('.modalC_youth_chk2').is(':checked')){
    //         $('.modalC_youth_area2').css('display', 'block');
    //         $('.modalC_youth_area1').css('display', 'none');
    //     }
    // });


    //// * 2022-06-15 회원가입방법_청소년대리인통합 아코디언리스트 * ////
    //tab
    $(".join_guide .tab_area .link-list > li:not("+$(".join_guide .top_inner .active").attr("href")+")").css('display', 'none');
    $(".join_guide .top_inner a").click(function(){

        $(".join_guide .top_inner a").removeClass("active");
        $(this).addClass("active");
        $(".join_guide .tab_area .link-list > li").hide();
        $($(this).attr("href")).show();
        return false;
    })

    //accordion
    var items = document.querySelectorAll('.accordion-banner .accordion-title');    

    function toggleAccordion() {
        
        var itemToggle = this.getAttribute('aria-expanded');	

        for (i = 0; i < items.length; i++) {
            items[i].setAttribute('aria-expanded', 'false');
        }
        
        if (itemToggle == 'false') {
            this.setAttribute('aria-expanded', 'true');
        }
    }

    for ( var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', toggleAccordion);
    }

    //버튼 드랍다운
    var guideDropdown = function() {

        for( var i = 1; i < $('.g_view').length + 1; i++){

            (function(index){

                $('.g_btn' + index ).click(function(){
                    $('.g_view' + index ).toggle();
                });

            })(i);

        }
    };
    guideDropdown();

    //체크이미지 변경
    $(".join_guide .accordion-title").click(function(){
        $(".join_guide .accordion-title").removeClass('on');
        $(this).addClass('on');
    });







});
