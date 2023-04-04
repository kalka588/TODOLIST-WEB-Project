const deleteItem = (elem) => {
    console.log("delete item")
    elem.parentElement.remove();
}

const displayEditing = () => {
    let editing = document.querySelector('.editing')
    let parentEditing = document.querySelector('.parentediting')
    let boxOpacity = document.querySelector('.boxOpacity')

    const style = getComputedStyle(parentEditing)
    if (style.display === "none") {
        parentEditing.style.display = "flex"
        editing.style.display = "flex"
        boxOpacity.style.display = "flex"
    } else {
        parentEditing.style.display = "none"
        editing.style.display = "none"
        boxOpacity.style.display = "none"
    }

    if (document.querySelector("body").clientWidth >= 1024) {
        boxOpacity.style.display = "none"
        if (style.display === "flex") {
            document.querySelector(".mainContainer").setAttribute("style", "grid-template-columns: repeat(1, auto 300px )")
        } else {
            document.querySelector(".mainContainer").setAttribute("style", "grid-template-columns: repeat(1, auto)")
        }
    }
}


