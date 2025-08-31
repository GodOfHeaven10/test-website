const hoverTarget = document.getElementById("Hover-Test")

hoverTarget.style.backgroundColor = oldColor

var oldColor = "gray"
hoverTarget.style.alignSelf = center
hoverTarget.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "red";
})

hoverTarget.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = oldColor
})