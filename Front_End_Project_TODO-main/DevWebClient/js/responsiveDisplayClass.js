const responsiveDisplay = () => {
    try {
        let menuDeskop = document.querySelector('.menuDeskop')
        let boxOpacity = document.querySelector('.boxOpacityRight')

        menuDeskop.style.display = "flex"
        boxOpacity.style.display = "none"
    } catch (err) {
        console.log(err)
    }
}

const responsiveDisplayReverse = () => {
    try {
        let menuDeskop = document.querySelector('.menuDeskop')
        let boxOpacity = document.querySelector('.boxOpacityRight')

        menuDeskop.style.display = "none"
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
        isDeskopMode = true
    } else if (isDeskopMode && document.querySelector('body').clientWidth < 1024) {
        responsiveDisplayReverse()
        isDeskopMode = false
    }
}

deskopMode() 