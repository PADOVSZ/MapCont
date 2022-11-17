const express = require('express')
const rota = require('./src/routers/router')
const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static('./externo'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/', rota)

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080')
})