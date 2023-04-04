const displayMenu = () => {
    const menu = document.querySelector(".menuDeskop")
    const boxOpacity = document.querySelector(".boxOpacityRight")

    const style = getComputedStyle(menu)
    if (style.display === "none") {
        menu.style.display = "flex"
        boxOpacity.style.display = "flex"
    } else {
        menu.style.display = "none"
        boxOpacity.style.display = "none"
    }
}

const deconnexion = () => {
    window.location.href = 'login.html'
}

