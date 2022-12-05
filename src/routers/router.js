const express = require('express')
const controller = require('../controllers/controller.js')

const router = express.Router()

router.get('/', controller.buscaraiz)
router.get('/principal', controller.principal)
router.get('/principal/americadosulcard', controller.americaDoSul)
router.get('/principal/americadonortecard', controller.americaDoNorte)
router.get('/principal/americacentralcard', controller.americaCentral)
router.get('/principal/asiacard', controller.asia)
router.get('/principal/africacard', controller.africa)
router.get('/principal/europacard', controller.europa)
router.get('/principal/antartidacard', controller.antartida)
router.get('/principal/oceaniacard', controller.oceania)

module.exports = router