document.addEventListener("DOMContentLoaded",()=>{

    const station = document.querySelector(".station")
    const btnNext = document.querySelector("#btn-next")
    const btnPrev = document.querySelector("#btn-prev")
    const slideArray = document.querySelectorAll(".train li")
    let count = 0

    // 다음버튼을 클릭했을 때, 4개의 li태그들을 일단 on클래스를 다 지운다. 순번에 맞는 li태그가 on클래스가 들어간다.
    btnNext.addEventListener("click",()=>{
        count++
        if(count>slideArray.length-1)count=0
        slideArray.forEach(li=>li.classList.remove("on"))
        slideArray[count].classList.add("on")
    })

    btnPrev.addEventListener("click",()=>{
        count--
        if(count<0)count=slideArray.length-1
        slideArray.forEach(li=>li.classList.remove("on"))
        slideArray[count].classList.add("on")
    })

    let timer = setInterval(()=>{
        count++
        if(count>slideArray.length-1)count=0
        slideArray.forEach(li=>li.classList.remove("on"))
        slideArray[count].classList.add("on")
    },3000)

    station.addEventListener("mouseenter",()=>{
        clearInterval(timer)
    })

    station.addEventListener("mouseleave",()=>{
        timer = setInterval(()=>{
            count++
            if(count>slideArray.length-1)count=0
            slideArray.forEach(li=>li.classList.remove("on"))
            slideArray[count].classList.add("on")
        },3000)
    })


})