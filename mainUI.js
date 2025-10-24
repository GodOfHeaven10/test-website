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

/*
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
*/

let warningShown = false
let orientationCheckTimeout

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
        -webkit-user-select: none
        -moz-user-select: none
        -ms-user-select: none
        user-select: none
        -webkit-touch-callout: none
        -webkit-tap-highlight-color: transparent
    `;
    document.body.appendChild(warning);
}

function checkOrientation() {
    clearTimeout(orientationCheckTimeout)
    const isPortrait = window.innerHeight > window.innerWidth
    orientationCheckTimeout = setTimeout(() => {
        if (isPortrait && !warningShown) {
        showOrientationWarning()
        warningShown = true
            } else {
        const existingWarning = document.querySelector('[data-orientation-warning]')
        if (existingWarning) existingWarning.remove()
        warningShown = false
        }
    }, 250);
    
}

// checkOrientation()

window.addEventListener('resize', checkOrientation)

// document.addEventListener('DOMContentLoaded', checkOrientation)

setTimeout(checkOrientation, 500)

const animateUI = document.querySelector("div#container.animate")
const animateUIButton = document.querySelector("div#sidebuttons.rightbar div#animate-button.rightbar")
const animationTypeButton = document.querySelector('div#container.animate div#animate.animate-buttons-container div#animation-types.animate-button')
const animationTypeUI = document.querySelector('div#container.animation-types')
const beatMakerButton = document.querySelector('div#sidebuttons.rightbar div#audio-button.rightbar')
const beatMakerUI = document.querySelector('div#container.beat-maker')

let AnimateInterval
let animationTypeButtonInterval
let beatMakerInterval


animateUIButton.addEventListener('click', (event) => {
    if (!AnimateInterval) {
        animateUI.style.visibility = "visible"
        AnimateInterval = true
    } else {
        animateUI.style.visibility = "hidden"
        AnimateInterval = false

        if (animationTypeButtonInterval) {
            animationTypeUI.style.visibility = "hidden"
            animationTypeButtonInterval = false
        } else if (beatMakerInterval) {
            beatMakerUI.style.visibility = "hidden"
            beatMakerInterval = false
        }
    }
})



animationTypeButton.addEventListener('click', (event) => {
    if (!animationTypeButtonInterval) {
        animationTypeUI.style.visibility = "visible"
        animationTypeButtonInterval = true
    } else {
        animationTypeUI.style.visibility = "hidden"
        animationTypeButtonInterval = false

        if (AnimateInterval) {
            animateUI.style.visibility = "hidden"
            AnimateInterval = false
        } else if (beatMakerInterval) {
            beatMakerUI.style.visibility = "hidden"
            beatMakerInterval = false
        }
    }
})

beatMakerButton.addEventListener('click', (event) => {
    if (!beatMakerInterval) {
        beatMakerUI.style.visibility = "visible"
        beatMakerInterval = true
    } else {
        beatMakerUI.style.visibility = "visible"
        beatMakerInterval = false

        if (animationTypeButtonInterval) {
            animationTypeUI.style.visibility = "hidden"
            animationTypeButtonInterval = false
        } else if (AnimateInterval) {
            animateUI.style.visibility = "hidden"
            AnimateInterval = false
        }
    }
})