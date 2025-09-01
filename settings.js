const settings = document.getElementById("Settings")
let settingstriggered = 0

//Animate button
settings.addEventListener('mouseover', (event) => {
    if (settingstriggered != 1) {
        event.target.style.backgroundColor = "#555555ff"
    }
})

settings.addEventListener('mouseout', (event) => {
    if (settingstriggered != 1) {
        event.target.style.backgroundColor = "#1E1E1E"
    }
})

settings.addEventListener('click', (event) => {
    if (settingstriggered != 1) {
        event.target.style.backgroundColor = "#a3a3a3ff"
        event.target.style.color = "#1E1E1E"
        settingstriggered = 1
    } else {
        event.target.style.backgroundColor = "#1E1E1E"
        event.target.style.color = "#FFF"
        settingstriggered = 0
    }
})