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

exports.americaDoSul = ('/principal/americadosulcard', async(req, res) => {
    res.render('./card_AmericaDoSul.ejs')
})

exports.americaDoNorte = ('/principal/americadonortecard', async(req, res) => {
    res.render('./card_AmericaDoNorte.ejs')
})

exports.americaCentral = ('/principal/americacentralcard', async(req, res) => {
    res.render('./card_AmericaCentral.ejs')
})

exports.asia = ('/principal/asiacard', async(req, res) => {
    res.render('./card_Asia.ejs')
})

exports.africa = ('/principal/africacard', async(req, res) => {
    res.render('./card_Africa.ejs')
})

exports.europa = ('/principal/europacard', async(req, res) => {
    res.render('./card_Europa.ejs')
})

exports.antartida = ('/principal/antartidacard', async(req, res) => {
    res.render('./card_Antartida.ejs')
})

exports.oceania = ('/principal/oceaniacard', async(req, res) => {
    res.render('./card_Oceania.ejs')
})