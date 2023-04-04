const isEmpty = () => {
    try {
        let pClass = "error"
        let elementSuppr = document.querySelectorAll("." + pClass)
        if (elementSuppr.length > 0) {
            elementSuppr.forEach(element => {
                element.remove()
            })
        }
        let email = document.querySelector("[type = 'email']").value
        let mdp = document.querySelector("[type = 'password']").value
        if (email.length < 1 || mdp.length < 1) {
            createError(pClass)
        }
    } catch (err) {
        console.log(err)
    }
}

const createError = (pClass) => {
    let pErrorEmail = genereHtml("p", "Veuillez renseigner une adresse e-mail", [{ attribut: "class", valeur: pClass }])
    let pErrorMdp = genereHtml("p", "Veuillez renseigner un mot de passe", [{ attribut: "class", valeur: pClass }])
    document.querySelector('.mainContainer .flexContainer div:first-child').appendChild(pErrorEmail)
    document.querySelector('.mainContainer .flexContainer + .flexContainer').appendChild(pErrorMdp)
}