const genereHtml = (balise, texte, objAttributs) => {
    let newBalise = document.createElement(balise)
    if (texte != "") {
        let newContentText = document.createTextNode(texte)
        newBalise.appendChild(newContentText)
    }
    if (objAttributs.length != 0) {
        for (const attr of objAttributs) {
            newBalise.setAttribute(attr.attribut, attr.valeur)
        }
    }
    return newBalise;
}
