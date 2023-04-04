const Supr_List_Button = () => {
    let element = document.querySelector(".big_div");
    const style = getComputedStyle(element)
    if (style.display === "flex") {
        element.style.display = "none"
    } else {
        element.style.display = "flex"
    }
}

const supr_All = () => {
    let elements = document.querySelectorAll('.item [type="checkbox"]:checked')
    elements.forEach((item) => item.parentElement.remove())
    Supr_List_Button()
}

