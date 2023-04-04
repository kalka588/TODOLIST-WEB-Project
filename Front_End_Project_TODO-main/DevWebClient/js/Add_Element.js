const Add_new_element = () => {
    let balise = genereHtml("div", "", [{ attribut: "class", valeur: "item" }])

    let big_div = genereHtml("div", "", [{ attribut: "class", valeur: "task" }])

    let ul = genereHtml("ul", "", [{ attribut: "class", valeur: "task_l2" }])

    let li2 = genereHtml("li", "", [])
    li2.appendChild(genereHtml("img", "", [{ attribut: "src", valeur: "assets/dot.svg" }, { attribut: "alt", valeur: "icon point" }]))

    let li4 = genereHtml("li", "", [])
    li4.appendChild(genereHtml("img", "", [{ attribut: "src", valeur: "assets/dot.svg" }, { attribut: "alt", valeur: "icon point" }]))

    ul.appendChild(genereHtml("li", "1 sur 2", []))
    ul.appendChild(li2)
    ul.appendChild(genereHtml("li", "Echeance:aujourd'hui", []))
    ul.appendChild(li4)
    ul.appendChild(genereHtml("li", "Note", []))

    let text_txt = document.querySelector(".new_elemt_txt").value
    big_div.appendChild(genereHtml("p", text_txt, [{ attribut: "class", valeur: "taskl1" }, { attribut: "onclick", valeur: "displayEditing()" }]))
    big_div.appendChild(ul)

    balise.appendChild(genereHtml("input", "", [{ attribut: "type", valeur: "checkbox" }]))
    balise.appendChild(big_div)
    balise.appendChild(genereHtml("img", "", [{ attribut: "src", valeur: "assets/delete.svg" }, { attribut: "alt", valeur: "icon delete" }, { attribut: "onclick", valeur: "deleteItem(this)" }]))

    document.querySelector('.item_holder').appendChild(balise)

    let resetText = document.querySelector(".new_elemt_txt")
    resetText.value = ""
}