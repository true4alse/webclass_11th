document.addEventListener("DOMContentLoaded",()=>{
    
    let mouseCursor = document.querySelector(".mouseCursor")
    let cursorState = false
    // e,event 변수에 저장되어있는 이벤트 객체 => 홈페이지에서 사용자의 모든 행동 정보가 저장되어있는 변수
    document.addEventListener("mousemove",function(e){
        // 마우스가 움직일 때마다 실행되는 소스코드
        if(!cursorState){
            mouseCursor.style.display = "block"
            cursorState = true
        }
        // console.log(e.clientX,e.clientY)
        mouseCursor.style.left = e.clientX+"px"
        mouseCursor.style.top = e.clientY+"px"
    })

    // 마우스를 누르고 있을 때 실행되는 소스코드
    document.addEventListener("mousedown",function(){
        console.log("마우스를 누르고 있음")
        mouseCursor.innerHTML = `<img src="./img/clicked.png" alt="기본 마우스 커서 이미지">`
    })

    // 마우스를 눌렀다가 뗐을 때 실행되는 소스코드
    document.addEventListener("mouseup",function(){
        console.log("마우스를 뗐음")
        mouseCursor.innerHTML = `<img src="./img/default.png" alt="기본 마우스 커서 이미지">`
    })

    // 툴팁 박스가 마우스 커서 우측에 배치될 수 있도록 설정
    let tooltipBox = document.querySelector(".tooltip-box")
    document.addEventListener("mousemove",(e)=>{
        tooltipBox.style.left = (e.clientX+120)+"px"
        tooltipBox.style.top = (e.clientY)+"px"
    })
    
    let tooltips = document.querySelectorAll(".tooltip")
    tooltips.forEach(tag=>{

        // 마우스 올렸을 때
        tag.addEventListener("mouseenter",()=>{
            tooltipBox.style.display = "block"
            tooltipBox.innerHTML = tag.getAttribute("data-tooltip")
            mouseCursor.innerHTML = `<img src="./img/clicked.png" alt="기본 마우스 커서 이미지">`
        })

        // 마우스 뺐을 때
        tag.addEventListener("mouseleave",()=>{
            tooltipBox.style.display = "none"
            tooltipBox.innerHTML = ``
            mouseCursor.innerHTML = `<img src="./img/default.png" alt="기본 마우스 커서 이미지">`
        })

    })

})