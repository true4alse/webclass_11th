document.addEventListener("DOMContentLoaded",function(){
    // 전체 문서가 다 읽혀진 뒤 실행되는 소스코드
    let btn1 = document.querySelector("#btn1")
    btn1.addEventListener("click",function(){
        alert("안녕하세요")
    })

    
    let btn2 = document.querySelector("#btn2")
    let box = document.querySelector(".box")

    btn2.addEventListener("click",function(){
        // 아이디가 btn2인 태그를 클릭했을 때 box클래스에 배경색이 라임색으로 칠해지게 되는 기능 
        box.style.backgroundColor = "lime"
    })

    // 배경색을 제거하는 기능
    const btn3 = document.querySelector("#btn3")
    btn3.addEventListener("click",function(){
        box.style.backgroundColor = "initial"
    })

    let btnSmallFont = document.querySelector("#btn-small-font")
    let html = document.querySelector("html")
    let basicFontSize = 16
    let minFontSize = 12
    let maxFontSize = 22

    btnSmallFont.addEventListener("click",function(){
        if(basicFontSize<=minFontSize){
            alert(minFontSize+"픽셀 아래로는 글씨를 작게할 수 없습니다.")
            return
        }
        basicFontSize -= 1
        html.style.fontSize = basicFontSize+"px"
    })

    let btnBigFont = document.querySelector("#btn-big-font")
    btnBigFont.addEventListener("click",function(){
        if(basicFontSize>=maxFontSize){
            alert(maxFontSize+"픽셀 위로는 글씨를 크게할 수 없습니다.")
            return
        }
        basicFontSize += 1
        html.style.fontSize = basicFontSize+"px"
    })

})

