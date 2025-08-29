const body = document.body;
const oldText = document.querySelector(h1).textContent;
const text = "Wow!";
const textToChange = document.querySelector(h1);
//forget this under this, lets do more fun manipulation
//textToChange.addEventListener("mouseover", () => {
//    textToChange.textContent = text
//    document.head.appendChild(textToChange)
//})
textToChange.addEventListener("mouseenter", () => {
    textToChange.textContent = text
    document.head.appendChild(textToChange)
})

textToChange.addEventListener("mouseleave", () => {
    textToChange.textContent = oldText
    document.head.appendChild(textToChange)
})

const buttons = ["Home", "About", "Contact", "Blog", "Games"]
const incrementBy = 50

for (i in buttons) {
    const button = document.createElement("button")
    button.setAttribute("id", buttons[i])
    button.style.backgroundColor = hsl(0, 0, i*incrementBy)
    button.style.height = 125
    button.style.width = 25
    button.style.alignSelf = center
    button.textContent = buttons[i]
    body.appendChild(button)
}

const textBox = document.querySelector(textBox)

if (textBox != null) {
    console.log(textBox)
}