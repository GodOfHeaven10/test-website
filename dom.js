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

const navigation = document.getElementsByClassName("Nav")

navigation.getElementById("Triggers").addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = "#555555ff"
})

navigation.getElementById("Triggers").addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = "#1E1E1E"
})

navigation.getElementById("Triggers"). addEventListener('click'), (event) => {
    event.target.style.backgroundColor = "#a3a3a3ff"
    event.target.style.color = "#1E1E1E"
}