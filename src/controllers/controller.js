const db = require('../database/db')
const cont = require('../models/continente')

const Cont = db.Mongoose.model('esquemaConts', cont.contSchema, 'continente')

exports.buscaraiz = ('/', async(req, res) => {
    res.render('home.ejs')
})

exports.getContinente = ('/continentes', async(req, res) => {
    let nome = req.query.nome
    const continente = await Cont.findOne({NomeContinente:nome})
    res.json(continente)
})