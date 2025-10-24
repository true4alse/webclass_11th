document.addEventListener("DOMContentLoaded",()=>{
    
    let mouseCursor = document.querySelector(".mouseCursor")

    // e,event 변수에 저장되어있는 이벤트 객체 => 홈페이지에서 사용자의 모든 행동 정보가 저장되어있는 변수
    document.addEventListener("mousemove",function(e){
        // 마우스가 움직일 때마다 실행되는 소스코드
        console.log(e.clientX,e.clientY)
        mouseCursor.style.left = e.clientX+"px"
        mouseCursor.style.top = e.clientY+"px"
    })

    document.addEventListener("mousedown",function(){
        
    })

})