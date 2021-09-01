const router = require('express-promise-router')();

const {
    getCiudades,
    addCiudad
} = require('../controllers/ciudad');

router.route('/')
    .get(getCiudades)
    .post(addCiudad)

module.exports = router;