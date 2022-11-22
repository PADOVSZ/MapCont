const express = require('express')
const controller = require('../controllers/controller.js')

const router = express.Router()

router.get('/', controller.buscaraiz)
router.get('/principal', controller.principal)

module.exports = router