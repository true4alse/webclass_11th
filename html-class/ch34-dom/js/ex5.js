document.addEventListener("DOMContentLoaded",()=>{

    let tabs = document.querySelectorAll(".tabs>span")
    let tabDescs = document.querySelectorAll(".tab-descs>section")

    tabs.forEach(function(tab,i){
        tab.addEventListener("click",function(){
            tabs.forEach(tab=>tab.classList.remove("on"))
            tabDescs.forEach(section=>section.classList.remove("on"))
            tab.classList.add("on")
            tabDescs[i].classList.add("on")
        })
    })




})