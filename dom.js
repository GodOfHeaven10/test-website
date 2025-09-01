const hoverTarget = document.getElementById("Hover-Test")

hoverTarget.style.backgroundColor = oldColor

var oldColor = "gray"
//hoverTarget.style.alignSelf = center
hoverTarget.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "red";
})

hoverTarget.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = oldColor
})

const triggers = document.getElementById("Triggers")
const animate = document.getElementById("Animate")
let triggerstriggered = 0
let animatetriggered = 0
//Triggers button
triggers.addEventListener('mouseover', (event) => {
    if (triggerstriggered != 1) {
        event.target.style.backgroundColor = "#555555ff"
    }
})

triggers.addEventListener('mouseout', (event) => {
    if (triggerstriggered != 1) {
        event.target.style.backgroundColor = "#1E1E1E"
    }
})

triggers.addEventListener('click', (event) => {
    if (triggerstriggered != 1) {
        event.target.style.backgroundColor = "#a3a3a3ff"
        event.target.style.color = "#1E1E1E"
        triggerstriggered = 1
    } else {
        event.target.style.backgroundColor = "#1E1E1E"
        event.target.style.color = "#FFF"
        triggerstriggered = 0
    }
})

function ButtonClickFunc(obj, value) {
    if (value != 1) {
        obj.style.backgroundColor = "#a3a3a3ff"
        obj.style.color = "#1E1E1E"
    } else if (value != 0)
        obj.style.backgroundColor = "#1E1E1E"
        obj.style.color = "#FFF"
    }
}

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
        ButtonClickFunc(event.target, 1)
    } else if (animatetriggered != 0) {
        ButtonClickFunc(event.target, 0)
    }
    
})