const signup = () => {
    let pClass = "error"
    let elementSuppr = document.querySelectorAll("." + pClass)
    if (elementSuppr.length > 0) {
        elementSuppr.forEach(element => {
            element.remove()
        })
    }

    let elementplaceholder = document.querySelector('.signupfast').value
    let email = document.querySelector("[type = 'email']").value
    let elementplaceholder2 = document.querySelector('.signupsecond').value

    if (elementplaceholder === "" && email === "") {
        createEmptyError(pClass)
    } else if (elementplaceholder !== elementplaceholder2 && email !== "") {
        createErrorMdp(pClass)
    }
}

const createEmptyError = (pClass) => {
    let parent1 = document.querySelector('.signup:nth-child(1)')
    let parent2 = document.querySelector('.signup:nth-child(2)')
    parent1.appendChild(genereHtml('p', "Veuillez renseigner une adresse e-mail", [{ attribut: "class", valeur: pClass }]))
    parent2.appendChild(genereHtml('p', "Veuillez renseigner un mot de passe", [{ attribut: "class", valeur: pClass }]))
}

const createErrorMdp = (pClass) => {
    let parent1 = document.querySelector('.signup:nth-child(1)')
    let parent2 = document.querySelector('.signup:nth-child(3)')
    parent1.appendChild(genereHtml('p', "Cette adresse e-mail est déjà utilisée", [{ attribut: "class", valeur: pClass }]))
    parent2.appendChild(genereHtml('p', "Les mots de passe ne correspondent pas", [{ attribut: "class", valeur: pClass }]))
}
