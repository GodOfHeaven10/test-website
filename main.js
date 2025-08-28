const body = document.body;
const oldText = document.querySelector(h1).textContent;
const text = "Wow!";
const textToChange = document.querySelector(h1);

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