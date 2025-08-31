const hoverTarget = document.getElementById("Hover-Test")
hoverTarget.style.backgroundColor = "gray"

hoverTarget.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "red";
})