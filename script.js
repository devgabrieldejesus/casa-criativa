// No javascript eu vou trabalhar muito com a ideia de objeto

// querySelector seleciona elementos no html igual no css 


function onOff() { //ouvindo evento de click do botão fat
    document.querySelector("#modal").classList.toggle("hide") // toogle = Colocando e tirando
    document.querySelector("body").classList.toggle("hideScroll") // Tirar scroll do modal

    document.querySelector("#modal").classList.toggle("addScroll") // Adicionar scroll no modal
}