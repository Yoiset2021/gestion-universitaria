const { format } = require('date-fns')

const Estudiante = require('../models/estudiante')
const Grupo = require('../models/grupo')
const Ciudad = require('../models/ciudad')

module.exports = {

    getEstudiantes: async (req, res) => {
        try {
            const estudiantes = await Estudiante.find({})
            res.status(200).json(estudiantes)
        } catch (error) {
            res.status(500).send(error)
        }
    },

    addEstudiante: async (req, res) => {
        const data = req.body
        const estudiante_validate = await Estudiante.findOne({ email: data.email })
        if (!estudiante_validate) {
            const newEstudiante = new Estudiante(data)
            if (data.fechaNacimiento) {
                const date = format(new Date(data.fechaNacimiento), 'yyyyMMdd')
                const date_now = format(new Date(Date.now()), 'yyyyMMdd')
                if (date > date_now) {
                    res.status(400).json({ error: { fecha_server: 'No puede ingresar una fecha porterior a la actual' } })
                }
            }
            if (data.grupo) {
                const grupo = await Grupo.findOne({ _id: data.grupo._id })
                if (grupo) {
                    grupo.estudiantes.push(newEstudiante)
                    await grupo.save()
                } else {
                    res.status(400).json({ error: { grupo_server: 'El identificador del grupo no es valido' } })
                }
            }
            if (data.ciudad) {
                const ciudad = await Ciudad.findOne({ _id: data.ciudad._id })
                if (!ciudad) {
                    res.status(400).json({ error: { ciudad_server: 'El identificador de la ciudad no es valido' } })
                }
            }
            await newEstudiante.save()
            res.status(200).json(newEstudiante)
        } else {
            res.status(409).json({ error: { correo: 'Ese email esta siendo usado por otro estudiante' } })
        }
    },
    /* Este metodo no pude utilizar ningun metodo de mongoose debido a dos factores:
       1- tenia validar que cuando se actualice el correo no introdujera un correo que este usando otro estudiante 
       2- para si cambia de grupo, al antiguo grupo quitarle el estudiante del arreglo y annadircelo al nuevo 
    */
    actualizarEstudiante: async (req, res) => {
        const { id } = req.params
        const data = req.body
        // busco el estudiante y valido que sea valido
        let estudiante_update = await Estudiante.findOne({ _id: id })
        if (estudiante_update) {
            // saco el grupo antes de actualizarlo por si cambia de grupo 
            const { grupo } = estudiante_update
            // lo actualizo 
            if (estudiante_update.nombre !== data.nombre) {
                estudiante_update.nombre = data.nombre
            }
            if (estudiante_update.edad !== data.edad) {
                estudiante_update.edad = data.edad
            }
            if (estudiante_update.sexo !== data.sexo) {
                estudiante_update.sexo = data.sexo
            }
            if (data.email) {
                if (estudiante_update.email !== data.email) {
                    const estudiante_validate = await Estudiante.findOne({ email: data.email })
                    if (!estudiante_validate) {
                        estudiante_update.email = data.email
                    } else {
                        res.status(409).json({ error: { correo: 'Existe otro estudiante con ese email' } })
                    }
                }
            }
            if (data.ciudad) {
                if (estudiante_update.ciudad._id !== data.ciudad._id) {
                    estudiante_update.ciudad = data.ciudad
                }
            }
            /* if (estudiante_update.fechaNacimiento !== data.fechaNacimiento) {
                estudiante_update.fechaNacimiento = data.fechaNacimiento
            }*/
            if (data.grupo) {
                // verifico que el alumno que estoy actualizando tenga un grupo 
                if (grupo._id) {
                    // comparo el grupo que viene en el request con el que tenia 
                    if (!grupo._id.equals(data.grupo._id)) {
                        // al cambiarlo de grupo, pimero asigno al estudiante el nuevo grupo 
                        estudiante_update.grupo = data.grupo
                        // busco el grupo nuevo y le adiciono el estudiante
                        const grupo_new = await Grupo.findOne({ _id: data.grupo._id })
                        grupo_new.estudiantes.push(estudiante_update)
                        await grupo_new.save()
                        // busco el grupo que tenia para quitarle el estudiante al arreglo
                        const grupo_antiguo = await Grupo.findOne({ _id: grupo._id })
                        // busco la posicion del alumno en arreglo
                        const index = grupo_antiguo.estudiantes.indexOf(estudiante_update._id)
                        //elimino el estudiante del grupo antiguo
                        grupo_antiguo.estudiantes.splice(index, 1)
                        await grupo_antiguo.save()
                    }
                } else {
                    // si el estudiante no tenia un grupo, le asigno el que viene en el request 
                    estudiante_update.grupo = data.grupo
                    // busco el grupo que viene en el request y le adiciono el estudiante
                    const grupo_new = await Grupo.findOne({ _id: data.grupo._id })
                    grupo_new.estudiantes.push(estudiante_update)
                    await grupo_new.save()
                }
            }
            await estudiante_update.save()
            res.status(200).json(estudiante_update)
        } else {
            res.status(400).json({ error: { server: 'No se encuentra ningun estudiante con ese identificador' } })
        }

    },
    eliminarEstudiante: async (req, res) => {
        const { id } = req.params
        const estudiante_delete = await Estudiante.findOneAndDelete({ _id: id })
        if (estudiante_delete) {
            /* guardo el grupo */
            const { grupo } = estudiante_delete
            if (grupo._id) {
                const grupo_actualizado = await Grupo.findOne({ _id: grupo._id })
                const index = grupo_actualizado.estudiantes.indexOf(estudiante_delete)
                grupo_actualizado.estudiantes.splice(index, 1)
                await grupo_actualizado.save()
            }
            res.status(200).json(estudiante_delete)
        } else {
            res.status(400).json({ error: { server: 'No se encuentra ningun estudiante con ese identificador' } })
        }
    }
}