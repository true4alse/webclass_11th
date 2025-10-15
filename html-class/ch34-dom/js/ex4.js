document.addEventListener("DOMContentLoaded",()=>{
    
    let btnMenu = document.querySelector(".btn-menu")
    let nav = document.querySelector("nav")

    // let status = false
    // btnMenu.addEventListener("click",function(){
    //     // status가 false라면 메뉴가 닫혀있다는 것을 의미한다.
    //     if(status==false){
    //         //메뉴가 닫혀있는 상황 status == false
    //         nav.classList.add("on")
    //         status = true
    //     }else{
    //         //메뉴가 열려있는 상황 status == true
    //         nav.classList.remove("on")
    //         status = false
    //     }
    // })

    btnMenu.addEventListener("click",function(){
        nav.classList.toggle("on")
        // on클래스가 없으면 추가하고 있으면 삭제하는 메서드 
    })

})