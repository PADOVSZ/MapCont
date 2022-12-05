const db = require('../database/db')
const cont = require('../models/continente')

const Cont = db.Mongoose.model('esquemaConts', cont.contSchema, 'continente')

exports.buscaraiz = ('/', async(req, res) => {
    res.render('home.ejs')
})

exports.principal = ('/principal', async(req, res) => {
    Cont.find({}, function(err, continentes) {
        res.render('mapCount.ejs', {
            continente: continentes
        })
    })
})

exports.cards = ('/principal/americadosulcard', async(req, res) => {
    res.render('./cards/Cards_AmericaDoSul/Card_AmericaDoSul.html')
})

exports.cards = ('/principal/americadonortecard', async(req, res) => {
    res.render('./cards/Cards_AmericaDoNorte/Card_AmericaDoNorte.html')
})

exports.cards = ('/principal/americacentralcard', async(req, res) => {
    res.render('./cards/Cards_AmericaCentral/Card_AmericaCentral.html')
})

exports.cards = ('/principal/asiacard', async(req, res) => {
    res.render('./cards/cards_Asia/card_Asia.html')
})

exports.cards = ('/principal/africacard', async(req, res) => {
    res.render('./cards/cards_Africa/card_Africa.html')
})

exports.cards = ('/principal/europacard', async(req, res) => {
    res.render('./cards/cards_Europa/card_Europa.html')
})

exports.cards = ('/principal/antartidacard', async(req, res) => {
    res.render('./cards/cards_Antartida/card_Antartida.html')
})

exports.cards = ('/principal/oceaniacard', async(req, res) => {
    res.render('./cards/cards_Oceania/card_Oceania.html')
})