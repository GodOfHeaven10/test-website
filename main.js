const body = document.body;
const text = "Wow!"
const textToChange = document.querySelector(h1);

textToChange.addEventListener("hover", () => {
    textToChange.textContent = text
    document.head.appendChild(textToChange)
})