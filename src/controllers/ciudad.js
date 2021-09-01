const Ciudad = require('../models/ciudad');

module.exports = {

    getCiudades: async (req, res) => {
        try {
            const ciudades = await Ciudad.find({})
            res.status(200).json(ciudades)
        } catch (error) {
            res.status(500).send(error)
        }
    },

    addCiudad: async (req, res) => {
        const data = req.body
        const newCiudad = new Ciudad(data)
        try {
            await newCiudad.save()
            res.status(200).json(newCiudad)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}