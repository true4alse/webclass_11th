document.addEventListener("DOMContentLoaded",function(){

    let second = document.querySelector("#second")
    let sec = 7
    let timer = setInterval(function(){
        sec--
        second.innerHTML = sec
    },1000)
    setTimeout(function(){
        clearInterval(timer)
    },7000)

    let naverschedule = setTimeout(function(){
        location.href = "https://www.naver.com"
    },7000)
    document.querySelector("#btn-stay").addEventListener("click",()=>{
        clearTimeout(naverschedule)
        clearInterval(timer)
        document.querySelector(".popup").classList.add("on")
    })

})

