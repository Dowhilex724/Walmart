$(function(){
        $(".voice_2 ul li").each(function(){
        var fold = $(this).find(".unfold");
        var unfold = $(this).find(".fold");
        if(fold.is(":hidden")){
            $(this).width(640);
        }else{
            $(this).width(100);
        }
    })
    $(".voice_2 ul li:eq(0)").css("width","640px");
    $(".voice_2 ul li").mouseover(function(){
        var li_index = $(this).index();
        $(this).animate({width:640},200);
        $(this).find(".unfold").show();
        $(this).find(".fold").hide();
        $(this).siblings().animate({width:100},200);
        $(this).siblings().find(".unfold").hide();
        $(this).siblings().find(".fold").show();
    })
    })  