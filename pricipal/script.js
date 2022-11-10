function Mostrar(id) {
    let info = document.querySelector(id)
    let button = document.getElementsByClassName("btn")
    info.style.display = "block"
    button.style.display = "none"
}

function Fechar(id) {
    let info = document.querySelector(id)
    let button = document.getElementsByClassName('btn')
    info.style.display = "none"
    button.style.display = "block"
}