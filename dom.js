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

triggers.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = "#555555ff"
})

triggers.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = "#1E1E1E"
})

triggers.addEventListener('click', (event) => {
    event.target.style.backgroundColor = "#a3a3a3ff"
    event.target.style.color = "#1E1E1E"
})