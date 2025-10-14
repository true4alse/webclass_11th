document.addEventListener("DOMContentLoaded",function(){
    // body태그끝까지 읽고난 뒤 한번 실행되는 소스코드 들

    // 오늘 하루동안 안보기
    let btnClosePopupOneday = document.querySelector(".btn-close-popup-oneday")
    let popup = document.querySelector(".popup")

    btnClosePopupOneday.addEventListener("click",function(){
        // 정말 오늘하루동안은 다시 보이지 않게 설정하는 소스코드들
        

        // 팝업이 닫히는 동작 -> popup클래스에 hide클래스가 추가되면 팝업이 닫힘
        popup.classList.add("hide")
    })

    // 닫기
    let btnClosePopup = document.querySelector(".btn-close-popup")
    btnClosePopup.addEventListener("click",function(){
        // 팝업이 닫히는 동작 -> popup클래스에 hide클래스가 추가되면 팝업이 닫힘
        popup.classList.add("hide")
    })


})