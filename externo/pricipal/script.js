let i=0

function Mostrar(id) {
    let info = document.querySelector(id)
    let button = document.getElementsByClassName("btn")

    info.style.visibility = "visible"
    info.style.opacity = "1"

    for (let i = 0; i < button.length; i++)
        button[i].style.display = "none"
}

function Fechar(id) {
    let info = document.querySelector(id)
    let button = document.getElementsByClassName('btn')

    info.style.visibility = "hidden"
    info.style.opacity = "1"


    for (let i = 0; i < button.length; i++)
        button[i].style.display = "block"
}