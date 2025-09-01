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
let triggerstriggered = 0
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