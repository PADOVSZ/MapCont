const express = require('express')
const controller = require('../controllers/controller.js')

const router = express.Router()

router.get('/', controller.buscaraiz)
router.get('/continentes', controller.getContinente)
/*router.get('/americadosul', controller.getAmericaDoSul)
router.get('/americadonorte', controller.getAmericaDoNorte)
router.get('/americacentral', controller.getAmericaCentral)
router.get('/africa', controller.getAfrica)
router.get('/europa', controller.getEuropa)
router.get('/asia', controller.getAsia)
router.get('/oceania', controller.getOceania)
router.get('/antartida', controller.getAntartida)

router.put('/alterarusuario', controller.alterarUsuario)
router.put('/alterarnome', controller.alterarNome)

router.delete('/excluirid', controller.excluirid)
router.delete('/excluirnome', controller.excluirnome)
router.delete('/excluiremail', controller.excluiremail)
*/
module.exports = router