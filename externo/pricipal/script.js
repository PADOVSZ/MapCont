imagesAmericaSul = ["https://s5.static.brasilescola.uol.com.br/be/2022/10/vista-floresta-amazonica.jpg",
                    "https://magazine.zarpo.com.br/wp-content/uploads/2019/02/15-destinos-irresistiveis-para-viagem-na-america-do-sul.jpg",
                    "https://i.pinimg.com/736x/07/17/28/071728edb0ca5cbcbed252aba8acd8cb--html.jpg",
                    "https://www.viajali.com.br/wp-content/uploads/2020/05/mochilao-america-do-sul-0.jpg",
                    "https://liberal.com.br/wp-content/uploads/2020/09/capa-Monte-Roraima.jpg"]

imagesAmericaNorte = ["https://interpoint.com.br/wp-content/uploads/2014/10/canada.jpg",
"https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2018/04/sao-francisco-golden-gate-credito-thinkstock-157736873.jpg",
"https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2018/05/thinkstockphotos-465951110-960-417.jpg",
"https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-nova-york-capa2019-06.jpg",
"https://a.travel-assets.com/findyours-php/viewfinder/images/res40/476000/476870-Newport-New-Jersey.jpg"]


let i=0

function Mostrar(id) {
    let info = document.querySelector(id)
    let button = document.getElementsByClassName("btn")

    info.style.display = "block"

    for (let i = 0; i < button.length; i++)
        button[i].style.display = "none"
}

function Fechar(id) {
    let info = document.querySelector(id)
    let button = document.getElementsByClassName('btn')

    info.style.display = "none"

    for (let i = 0; i < button.length; i++)
        button[i].style.display = "block"
}