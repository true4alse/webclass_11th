document.addEventListener("DOMContentLoaded",()=>{

    let dayMode = document.querySelector("#day-mode")
    let nightMode = document.querySelector("#night-mode")
    let noMode = document.querySelector("#no-mode")
    let clock = document.querySelector(".clock")

    dayMode.addEventListener("click",()=>{
        clock.classList.remove("night")
        clock.classList.add("day")
        flag = true
    })

    nightMode.addEventListener("click",()=>{
        clock.classList.remove("day")
        clock.classList.add("night")
        flag = true
    })

    noMode.addEventListener("click",()=>{
        clock.classList.remove("day")
        clock.classList.remove("night")
        flag = true
    })


    let arrayMonth = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]
    let arrayDay = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]
    let onday = document.querySelector(".onday")
    let ontime = document.querySelector(".ontime")
    let flag = false

    function writeTime(){
        let now = new Date()
        let month = now.getMonth()
        let date = now.getDate()
        let day = now.getDay()
        let hour = now.getHours()<10?"0"+now.getHours():now.getHours()
        let minute = now.getMinutes()<10?"0"+now.getMinutes():now.getMinutes()
        let second = now.getSeconds()<10?"0"+now.getSeconds():now.getSeconds()
        onday.innerHTML = `${arrayMonth[month]} ${date}일 ${arrayDay[day]}`
        ontime.innerHTML = `${hour}:${minute}:${second}`

        if(flag) return

        if(getDayOrNight()=="낮"){
            clock.classList.remove("day")
            clock.classList.remove("night")
            clock.classList.add("day")
        }else{
            clock.classList.remove("day")
            clock.classList.remove("night")
            clock.classList.add("night")
        }
    }

    function getDayOrNight(){
        // 오전 9시 40분 ~ 오후 6시 10분 -> 낮
        let now = new Date()
        let hours = now.getHours() // 0~23
        let minutes = now.getMinutes() // 0~59
        if((hours>9 && hours<18) || (hours==9 && minutes>=40) || (hours==18 && minutes<10)){
            return "낮"
        }else{
            return "밤"
        }
    }
    if(getDayOrNight()=="낮"){
        clock.classList.remove("day")
        clock.classList.remove("night")
        clock.classList.add("day")
    }else{
        clock.classList.remove("day")
        clock.classList.remove("night")
        clock.classList.add("night")
    }

    writeTime()
    setInterval(()=>{
        writeTime()
    },1000)

   



})