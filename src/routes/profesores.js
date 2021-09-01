const router = require('express-promise-router')();
const {
    getProfesores,
    addProfesor
} = require('../controllers/profesor');

router.route('/')
    .get(getProfesores)
    .post(addProfesor)

module.exports = router;