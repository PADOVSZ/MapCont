const db = require('../database/db')
const cont = require('../models/continente')

const Cont = db.Mongoose.model('esquemaConts', cont.contSchema, 'continente')

exports.buscaraiz = ('/', async(req, res) => {
    res.render('home.ejs')
})

exports.mapaprincipal = ('/principal', async(req,res) => {
    const continente = await Cont.find({}).lean().exec()
    res.render('mapCount.ejs', { continente })
})
