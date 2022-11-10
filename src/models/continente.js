const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contSchema = new Schema({
    NomeContinente : String,
    Populacao : String,
    Area : String,
    Bioma : String,
    Clima : String
}, {collection : 'continente'})

module.exports = {contSchema: contSchema}