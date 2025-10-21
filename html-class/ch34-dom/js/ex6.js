document.addEventListener("DOMContentLoaded",()=>{
    let btnNext = document.querySelector("#btn-next")
    let btnPrev = document.querySelector("#btn-prev")
    let train = document.querySelector(".train")
    let bullets = document.querySelectorAll(".pagination span")

    let count = 0
    let slides = train.children.length
    train.style.width = `${100*slides}%`

    function moveTrain(countNumber){
        train.style.transform = `translateX(${-(100/slides)*countNumber}%)`
    }
    function changePagination(countNumber){
        bullets.forEach(span=>span.classList.remove("on"))
        bullets[countNumber].classList.add("on")
        return countNumber
    }

    btnNext.addEventListener("click",()=>{
        count++
        if(count>slides-1){count=slides-1}
        moveTrain(count)
        changePagination(count)
    })

    btnPrev.addEventListener("click",()=>{
        count--
        if(count<0){count=0}
        moveTrain(count)
        changePagination(count)
    })

    // 페이지네이션 버튼들을 클릭했을 때 기능
    bullets.forEach((span,i)=>{
        span.addEventListener("click",()=>{
            count = changePagination(i)
            moveTrain(count)
        })
    })


})