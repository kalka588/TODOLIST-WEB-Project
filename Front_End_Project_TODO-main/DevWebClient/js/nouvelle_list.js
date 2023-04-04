const newList = () => {
    const parent = document.querySelector(".item_holder")

    let ul = genereHtml("ul", "", [{ attribut: "class", valeur: "task_l2" }])
    ul.appendChild(genereHtml("li", "1 sur 2", []))

    let li1 = genereHtml("li", "", [])
    li1.appendChild(genereHtml("img", "", [{ attribut: "src", valeur: "assets/dot.svg" }, { attribut: "alt", valeur: "icon point" }]))
    ul.appendChild(li1)

    ul.appendChild(genereHtml("li", "Echeance:aujourd'hui", []))

    let li2 = genereHtml("li", "", [])
    li2.appendChild(genereHtml("img", "", [{ attribut: "src", valeur: "assets/dot.svg" }, { attribut: "alt", valeur: "icon point" }]))
    ul.appendChild(li2)

    ul.appendChild(genereHtml("li", "Note", []))

    let div = genereHtml("div", "", [{ attribut: "class", valeur: "task" }])
    div.appendChild(genereHtml("p", "Créer un repository sur github", [{ attribut: "onclick", valeur: "displayTrue()" }, { attribut: "class", valeur: "taskl1" }]))
    div.appendChild(ul)
    let divItem = genereHtml("div", "", [{ attribut: "class", valeur: "item" }])
    divItem.appendChild(genereHtml("input", "", [{ attribut: "type", valeur: "checkbox" }]))
    divItem.appendChild(div)
    divItem.appendChild(genereHtml("img", "", [{ attribut: "src", valeur: "assets/delete.svg" }, { attribut: "alt", valeur: "icon delete" }, { attribut: "onclick", valeur: "deleteItem(this)" }]))
    parent.appendChild(divItem)
}