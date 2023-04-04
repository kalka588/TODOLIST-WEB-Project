const samePassword = () => {
    try {
        let pClass = "success"
        let mdp1 = document.querySelector('[name="password"]').value
        let mdp2 = document.querySelector('[name="confirm"]').value
        let elementSuppr = document.querySelector('.success')

        if (elementSuppr != undefined) {
            elementSuppr.remove()
        }

        if (mdp1 != "" && mdp2 != "" && mdp1 === mdp2) {
            createSuccess(pClass)
        }
    } catch (err) {
        console.log(err)
    }
}

const createSuccess = (pClass) => {
    pSuccess.appendChild(genereHtml("p", "Le mot de passe a été modifié avec succès. Cliquez ici pour vous connecter", [{ attribut: "class", valeur: pClass }]))
    document.querySelector('.mainContainer').appendChild(pSuccess)
}