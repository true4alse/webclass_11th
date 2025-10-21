document.addEventListener("DOMContentLoaded",()=>{

    let btnNext = document.querySelector("#btn-next")
    let btnPrev = document.querySelector("#btn-prev")
    let train = document.querySelector(".train")
    let count = 0 
    let slides = train.children.length
    train.style.height = `${slides*100}%`

    btnNext.addEventListener("click",()=>{
        count++
        if(count>slides-1){count=0}
        train.style.transform = `translateY(${-(100/slides)*count}%)`
    })

    btnPrev.addEventListener("click",()=>{
        count--
        if(count<0){count=slides-1}
        train.style.transform = `translateY(${-(100/slides)*count}%)`
    })

    // 자동슬라이드 기능
    setInterval(function(){
        count++
        if(count>slides-1){count=0}
        train.style.transform = `translateY(${-(100/slides)*count}%)`
    },3000)



})