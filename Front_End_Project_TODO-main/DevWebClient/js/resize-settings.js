const fixWidth = (nameClass, classMove) => {
    try {
        let elementFix = document.querySelector(nameClass)
        let elementMove = document.querySelector(classMove)
        let body = document.querySelector('body')

        let taille = 0
        if (elementFix.clientWidth === 0) {
            taille = (350 * 100 / body.clientWidth)
        } else { taille = (elementFix.clientWidth * 100 / body.clientWidth) }

        let newWidth = 100 - taille
        elementMove.setAttribute("style", "width:" + newWidth + "%")
        if (document.querySelector("body").clientWidth < 1024) {
            const style = getComputedStyle(elementFix)
            elementMove.style.display = style.display
        }
    } catch (err) {
        console.log(err)
    }
}

fixWidth(".menuDeskop", ".boxOpacityRight")

addEventListener("resize", () => {
    fixWidth(".menuDeskop", ".boxOpacityRight")
});
