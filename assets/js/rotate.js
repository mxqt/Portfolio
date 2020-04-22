document.addEventListener("mousemove", function (event) {
    
    const x  = event.pageX
    const y = event.pageY
    
    const midX = x - window.innerWidth / 2
    const midY = y - window.innerHeight / 2
    
    const box = document.querySelector("section")

    box.style.transform = "rotateX(" + (midY * 0.15) + "deg) rotateY(" + midX + "deg)"
})


document.addEventListener("mousemove", function (event) {
    
    const x  = event.pageX
    const y = event.pageY
    
    const midX = x - window.innerWidth / 2
    const midY = y - window.innerHeight / 2
    
    const box = document.querySelector("section2")

    box.style.transform = "rotateX(" + (midY * 0.15) + "deg) rotateY(" + midX + "deg)"
})
