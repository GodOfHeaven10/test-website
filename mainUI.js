const types = document.querySelector('#selector.bottombar')

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
/*
if (container) {
    const children = Array.from(container.children);

    children.forEach((item) => {
        console.log(item)

        item.addEventListener("mouseenter", (event) => {
            event.currentTarget.style.backgroundColor = 'hsla(0, 100%, 100%, 0.5)'
        })

        item.addEventListener("mouseleave", (event) => {
            event.currentTarget.style.backgroundColor = 'transparent'
        })
    })
} else {
    console.error("Element not found with selector: #selector.bottombar")
}
*/

const type = Array.from(types.children)

type.forEach((item) => {
    console.log(item)
    
    item.addEventListener("mouseenter", (event) => {
        event.currentTarget.style.backgroundColor = 'hsla(0, 100%, 100%, 50%)'
    })

    item.addEventListener("mouseleave", (event) => {
        event.currentTarget.style.backgroundColor = 'transparent'
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



