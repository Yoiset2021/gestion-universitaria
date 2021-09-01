const Grupo = require('../models/grupo');
const Profesor = require('../models/profesor')
const Estudiante = require('../models/estudiante');

module.exports = {

    getGrupos: async (req, res) => {
        try {
            const grupos = await Grupo.find({})
            res.status(200).json(grupos)
        } catch (error) {
            res.status(500).send(error)
        }

    },

    addGrupo: async (req, res) => {
        const data = req.body
        const grupo_validate = await Grupo.findOne({ nombre: data.nombre })
        if (!grupo_validate) {
            const newGrupo = new Grupo(data)
            if (data.profesorGuia) {
                const profesor = await Profesor.findOne({ _id: data.profesorGuia._id })
                if (!profesor) {
                    res.status(400).json({ error: { profesor_server: 'No existe ningun profesor con ese identificador' } })
                }
            }
            await newGrupo.save()
            res.status(200).json(newGrupo)
        } else {
            res.status(400).json({ error: { nombre_server: 'Ese nombre ya es usado por otro grupo' } })
        }
    },

    actualizarGrupo: async (req, res) => {
        const { id } = req.params
        const data = req.body
        const grupo_update = await Grupo.findOneAndUpdate({ _id: id }, data, { new: true })
        if (grupo_update) {
            const { estudiantes } = grupo_update
            if (estudiantes.length) {
                estudiantes.forEach(async (estud) => {
                    let estudiante = await Estudiante.findOne({ _id: estud._id })
                    estudiante.grupo.nombre = grupo_update.nombre
                    await estudiante.save()
                })
            }
        } else {
            res.status(400).json({ error: { server: 'No se encuentra un grupo con ese identificador' } })
        }
        res.status(200).json(grupo_update)
    },

    eliminarGrupo: async (req, res) => {
        const { id } = req.params
        const grupo_delete = await Grupo.findOneAndDelete({ _id: id })
        if (grupo_delete) {
            /*saco los estudiantes que tienen ese grupo */
            const { estudiantes } = grupo_delete
            /*si tiene estudiantes le quito el grupo */
            if (estudiantes.length) {
                estudiantes.forEach(async (estudiante) => {
                    await Estudiante.findOneAndUpdate({ _id: estudiante._id, $unset: { "grupo": "" } }, { new: true })
                })
            }
            res.status(200).json(grupo_delete)
        } else {
            res.status(400).json({ error: { server: 'No se encuentra un grupo con ese identificador' } })
        }
    }
}