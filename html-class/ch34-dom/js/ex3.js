document.addEventListener("DOMContentLoaded",function(){

    // 메뉴 버튼을 누르면 메뉴가 나오는 기능
    let btnMenu = document.querySelector(".btn-menu")
    let nav = document.querySelector("nav")
    let btnCloseMenu = document.querySelector(".btn-close-menu")

    btnMenu.addEventListener("click",()=>{
        // nav태그에 on클래스가 추가되는 코드
        nav.classList.add("on")
    })

    btnCloseMenu.addEventListener("click",function(){
        nav.classList.remove("on")
    })

})