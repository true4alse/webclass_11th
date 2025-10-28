// document.addEventListener("DOMContentLoaded",()=>{})

$(document).ready(()=>{

    $(".a").css("text-decoration","underline")
    let txt = $(".b").html()
    $(".b").html("새로운 내용")
    let href = $(".c").attr("href")
    // alert(href)
    $(".c").attr("href","https://www.daum.net")
    $(".d").addClass("on")
    $(".d").removeClass("on")
    $(".d").toggleClass("on")
    $(".d").toggleClass("on")
    $(".e").next().next().css("color","red")
    $(".e").prev().css("color","blue")
    $(".e").parent().css("border","2px solid #000")

    $(".btn").click(function(){
        $(".frame").css("color","green")
    })

    $(".tabs>li").click(function(){
        let idx = $(this).index()
        $(".tab-desciption>section").removeClass("on")
        $(".tab-desciption>section").eq(idx).addClass("on")
    })



})
