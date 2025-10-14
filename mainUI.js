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
        event.currentTarget.style.backgroundColor = 'hsla(0, 100%, 100%, 0.5)'
    })

    item.addEventListener("mouseleave", (event) => {
        event.currentTarget.style.backgroundColor = 'transparent'
    })
})

let warningShown = false

function showOrientationWarning() {
    const warning = document.createElement('div');
    warning.setAttribute('data-orientation-warning', 'true')
    warning.innerHTML = '🔄 Please rotate your device to landscape for the best experience';
    warning.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        font-size: 1.5em;
        text-align: center;
        padding: 20px;
    `;
    document.body.appendChild(warning);
}

function checkOrientation() {
    const isPortrait = window.innerHeight > window.innerWidth

    if (isPortrait && !warningShown) {
        showOrientationWarning()
        warningShown = true
    } else {
        const existingWarning = document.querySelector('[data-orientation-warning]')
        if (existingWarning) existingWarning.remove()
        warningShown = false
    }
}

// checkOrientation()

window.addEventListener('resize', checkOrientation)

document.addEventListener('DOMContentLoaded', checkOrientation)



