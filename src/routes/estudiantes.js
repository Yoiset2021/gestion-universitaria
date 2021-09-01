const router = require('express-promise-router')();
const {
    getEstudiantes,
    addEstudiante,
    actualizarEstudiante,
    eliminarEstudiante
} = require('../controllers/estudiante');

router.route('/')
    .get(getEstudiantes)
    .post(addEstudiante)
router.route('/:id')
    .put(actualizarEstudiante)
    .delete(eliminarEstudiante)

module.exports = router;