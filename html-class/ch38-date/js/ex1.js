document.addEventListener("DOMContentLoaded",()=>{

    let dayMode = document.querySelector("#day-mode")
    let nightMode = document.querySelector("#night-mode")
    let noMode = document.querySelector("#no-mode")
    let clock = document.querySelector(".clock")

    dayMode.addEventListener("click",()=>{
        clock.classList.remove("night")
        clock.classList.add("day")
    })

    nightMode.addEventListener("click",()=>{
        clock.classList.remove("day")
        clock.classList.add("night")
    })

    noMode.addEventListener("click",()=>{
        clock.classList.remove("day")
        clock.classList.remove("night")
    })

})