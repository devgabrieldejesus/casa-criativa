// No javascript eu vou trabalhar muito com a ideia de objeto

// querySelector seleciona elementos no html igual no css 

function onOff() { //ouvindo evento de click do botão fat
    document.querySelector("#modal").classList.toggle("hide") // toogle = Colocando e tirando
    document.querySelector("body").classList.toggle("hideScroll") // Tirar scroll do modal

    document.querySelector("#modal").classList.toggle("addScroll") // Adicionar scroll no modal
}

function checkFields(event) {

    const valuesToCheck = [
        "title",
        "category",
        "description",
        "image",
        "link"
    ]
    console.log(typeof event.target["title"].value === "string")

    const isEmpty = valuesToCheck.find(function(value) {
        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target[value].value.trim()

        if(checkIfIsString && checkIfIsEmpty) {
            return true
        }
    })
    
    if(isEmpty) {
        event.preventDefault()
        alert("Por favor, preencha todos os campos");
    }
}