const bottomBarSelector = document.querySelector('#selector.bottomBar')

if (bottomBarSelector) {
    Array.from(bottomBarSelector.children).forEach(child => {
        child.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = 'hsla(0, 100%, 100%, 50%)'
        })

        child.addEventListener("mouseleave", (event) => {
            event.target.style.backgroundColor = 'transparent'
        })
    });
}



const numberOfTypes = 8

//for (i in range(numberOfTypes)) {
//    var labels = document.createElement("div")
//    labels.style.width = "12.5%";
//    labels.style.height = "100%";
//    labels.style.backgroundColor = "transparent";
//    bottomBarSelector.appendChild(labels)
//}



