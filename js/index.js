$(function(){
    let showBanner = 0;    
    let moveX=0;

    let cloneObj = $(".banner>li").eq(0).clone();
    $(".banner").append(cloneObj);
    let liWidth = $(".banner>li").eq(0).width();
    let count=$(".banner>li").length;
    let timer;
    console.log(liWidth);
    function moveSlide(){
        moveX = -liWidth*showBanner;
        $(".banner").stop().animate({
            "margin-left":moveX+"px"
        },500)
        
        if(showBanner === count-1) {
            $(".pagerCircle>li").eq(0).addClass("active")
            .siblings("li").removeClass("active");
        }
        else {
            $(".pagerCircle>li").eq(showBanner).addClass("active")
            .siblings("li").removeClass("active");
        }   
    }

    $(".arrow>li:last-child").on("click",function(){
        console.log(showBanner);
        if(showBanner === count-1){
            showBanner=0;
            $(".banner").css("margin-left",0)
        }
        showBanner++;
        moveSlide();
    })
    $(".arrow>li:first-child").on("click",function(){
        if(showBanner === 0){
            showBanner=count-1;
            $(".banner").css("margin-left",-(count-1)*liWidth)
        }
        showBanner--;
        moveSlide();
    })
    $(".pagerCircle>li").on("click",function(){
        console.log($(this).index());
        showBanner = $(this).index();
        moveSlide();
    })

    $("#mainBanner").on({
        "mouseover":function(){
            clearInterval(timer)
        },
        "mouseout":function(){
            timer = setInterval(()=>{
                $(".arrow>li:last-child").trigger("click");
            },3000);
        }
    })
})

// ham 버튼
window.onload=function(){
    const mMenu = document.querySelector(".mMenu");
    const ham = document.querySelector(".hamBtn");
    const hamClose = document.querySelector(".hamClose");
    function toggleMenu(){
        if(ham.classList.contains("on")){
            ham.classList.remove("on");
            mMenu.classList.remove("activMenu");
        }else{
            ham.classList.add("on");
            mMenu.classList.add("activMenu");
        }
    }
    function closeHam(){
        if(hamClose.classList.contains("hamClose")){
            ham.classList.remove("on");
            mMenu.classList.remove("activMenu");
        }
    }
    hamClose.addEventListener("click",closeHam);
    ham.addEventListener("click",toggleMenu);
    
}

//추천상품 슬라이드
$(function(){
    let showBannerSub = 0;    
    let moveXSub=0;
    let cloneObjSub = $(".subslide>li").eq(0).clone();
    $(".subslide").append(cloneObjSub);
    let liWidthSub = $(".subslide>li").eq(0).width();

    function moveSlideSub(){
        moveXSub = -liWidthSub*showBannerSub;
        $(".subslide").stop().animate({
            "margin-left":moveXSub+"px"
        },500)
    }

    $(".arrow2>li:last-child").on("click",function(){
        if(showBannerSub === 6-3){
            showBannerSub=0;
            $(".subslide").css("margin-left",0)
        }
        showBannerSub++;
        moveSlideSub();
    })
    $(".arrow2>li:first-child").on("click",function(){
        if(showBannerSub === 0){
            showBannerSub=6-3;
            $(".subslide").css("margin-left",-(6-3)*liWidthSub)
        }
        showBannerSub--;
        moveSlideSub();
    })
})

// 탭
$(function(){
    let tab = $('.product>.title>li');
    let content = $('.list>div');

    tab.on('click',function(){
        let tg = $(this);
        let tc = tg.find('a');
        let i = tg.index(); 

        tab.find('a').removeClass('on'); 
        tc.addClass('on'); 

        content.css('display', 'none');
        content.eq(i).css('display', 'block'); 
    });
});