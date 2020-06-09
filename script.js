// No javascript eu vou trabalhar muito com a ideia de objeto

// querySelector seleciona elementos no html igual no css 
document
    .querySelector('button.fat')
    .addEventListener('click', function(){ //ouvindo evento de click do botão fat
        document
            .querySelector("#footer")
            .classList
            .toggle("hide") // toogle = Colocando e tirando
    }) 