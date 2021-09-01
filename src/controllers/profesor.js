const Profesor = require('../models/profesor');

module.exports = {

    getProfesores: async (req, res) => {
        try {
            const profesores = await Profesor.find({})
            res.status(200).json(profesores)
        } catch (error) {
            res.status(500).send(error)
        }
    },

    addProfesor: async (req, res) => {
        const data = req.body
        const newProfesor = new Profesor(data)
        try {
            await newProfesor.save()
            res.status(200).json(newProfesor)
        } catch (error) {
            res.status(500).send(error)
        }

    }
}