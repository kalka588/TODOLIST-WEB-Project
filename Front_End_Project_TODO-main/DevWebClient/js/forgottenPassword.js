const isNotEmpty = () => {
    try {
        let pId = "msg"
        let elementSuppr = document.querySelector('#msg')
        if (elementSuppr != undefined) {
            elementSuppr.remove()
        }
        let value = document.querySelector("[type = 'email']").value
        if (value.length > 0) {
            createSuccess(pId)
        } else {
            createError(pId)
        }
    } catch (err) {
        console.log(err)
    }
}

const createSuccess = (pId) => {
    let pSuccess = genereHtml("p", "Si cette adresse e-mail correspond à un compte existant, un mail y a été envoyé", [{ attribut: "id", valeur: pId }, { attribut: "class", valeur: "success" }])
    document.querySelector('.mainContainer .flexContainer').appendChild(pSuccess)
    document.querySelector('.mainContainer .flexContainer').style["row-gap"] = "17px";
}

const createError = (pId) => {
    let pError = genereHtml("p", "Veuillez saisir une adresse e-mail", [{ attribut: "id", valeur: pId }, { attribut: "class", valeur: "error" }])
    document.querySelector('.mainContainer .flexContainer').appendChild(pError)
}