const responsiveDisplay = () => {
    try {
        let parentEditing = document.querySelector('.parentediting')
        let editing = document.querySelector('.editing')
        let boxOpacity = document.querySelector('.boxOpacity')
        parentEditing.style.display = " none"
        editing.style.display = "none"
        boxOpacity.style.display = "none"
    } catch (err) {
        console.log(err)
    }
}

const responsiveDisplayReverse = () => {
    try {
        let parentEditing = document.querySelector('.parentediting')
        let editing = document.querySelector('.editing')
        let boxOpacity = document.querySelector('.boxOpacity')
        parentEditing.style.display = " none"
        editing.style.display = "none"
        boxOpacity.style.display = "none"
    } catch (err) {
        console.log(err)
    }
}

let isDeskopMode = false
addEventListener('resize', () => {
    deskopMode()
})

const deskopMode = () => {
    if (!isDeskopMode && document.querySelector('body').clientWidth >= 1024) {
        responsiveDisplay()
        document.querySelector(".mainContainer").setAttribute("style", "grid-template-columns: repeat(1, auto)")
        isDeskopMode = true
    } else if (isDeskopMode && document.querySelector('body').clientWidth < 1024) {
        responsiveDisplayReverse()
        document.querySelector(".mainContainer").setAttribute("style", "grid-template-columns: repeat(1, auto)")
        isDeskopMode = false
    }
}

deskopMode()

addEventListener("resize", deskopMode())