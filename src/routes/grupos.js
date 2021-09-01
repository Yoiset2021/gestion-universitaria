const router = require('express-promise-router')()

const {
    getGrupos,
    addGrupo,
    actualizarGrupo,
    eliminarGrupo,
} = require('../controllers/grupo')

router.route('/')
    .get(getGrupos)
    .post(addGrupo)
router.route('/:id')
    .put(actualizarGrupo)
    .delete(eliminarGrupo)

module.exports = router