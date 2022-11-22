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