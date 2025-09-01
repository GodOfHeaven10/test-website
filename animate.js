const animate = document.getElementById("Animate")
let animatetriggered = 0

//Animate button
animate.addEventListener('mouseover', (event) => {
    if (animatetriggered != 1) {
        event.target.style.backgroundColor = "#555555ff"
    }
})

animate.addEventListener('mouseout', (event) => {
    if (animatetriggered != 1) {
        event.target.style.backgroundColor = "#1E1E1E"
    }
})

animate.addEventListener('click', (event) => {
    if (animatetriggered != 1) {
        event.target.style.backgroundColor = "#a3a3a3ff"
        event.target.style.color = "#1E1E1E"
        animatetriggered = 1
    } else {
        event.target.style.backgroundColor = "#1E1E1E"
        event.target.style.color = "#FFF"
        animatetriggered = 0
    }
})