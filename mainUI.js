const types = document.querySelector('#selector.type')

/*
bottomBarSelector.children.forEach(child => {
    child.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = 'hsla(0, 100%, 100%, 50%) !important' 
    })

    child.addEventListener("mouseleave", (event) => {
        event.target.style.backgroundColor = 'transparent !important'
    })
});
*/


const type = new array(types.children)
type.forEach((item) => {
    types.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = 'hsla(0, 100%, 100%, 50%)'
    })

    types.addEventListener("mouseleave", (event) => {
        event.target.style.backgroundColor = 'transparent'
    })
})






const numberOfTypes = 8

//for (i in range(numberOfTypes)) {
//    var labels = document.createElement("div")
//    labels.style.width = "12.5%";
//    labels.style.height = "100%";
//    labels.style.backgroundColor = "transparent";
//    bottomBarSelector.appendChild(labels)
//}



