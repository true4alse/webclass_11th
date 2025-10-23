document.addEventListener("DOMContentLoaded",()=>{

    let scr = document.querySelector("#scr")
    let documentHeight = document.documentElement.scrollHeight // 전체 문서의 높이(바디태그의 높이)
    let veiwHeight = window.innerHeight // 뷰포트 화면의 높이
    let barPercent = document.querySelector("#bar-percent")
    let currentBar = document.querySelector(".current-bar")

    window.addEventListener("scroll",function(){
        // 스크롤바가 움직일 때 실행되는 소스코드
        let distance = window.scrollY
        scr.innerHTML = `현재 위에서 스크롤바가 ${distance}픽셀만큼 떨어져있음.`

        let percent = ((distance/(documentHeight-veiwHeight))*100).toFixed(2)
        barPercent.innerHTML = percent
        currentBar.style.height = percent+"%"
    })

    let btnTop = document.querySelector(".btn-top")
    btnTop.addEventListener("click",()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    })

    // 마우스 휠을 올리거나 내릴 때 사용하는 소스코드
    let lastScrollTop = 0
    window.addEventListener("scroll",()=>{
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop // 브라우저의 호환성을 생각하여 스크롤바가 내려온 길이를 계산

        if(scrollTop < lastScrollTop){
            // 마우스 휠을 위로 굴렸을 때
            console.log("마우스 휠 위로 굴림")
            btnTop.classList.remove("on")
        }else{
            // 마우스 휠을 아래로 굴렸을 때
            console.log("마우스 휠 아래로 굴림")
            btnTop.classList.add("on")
        }
        lastScrollTop = scrollTop
    })




})