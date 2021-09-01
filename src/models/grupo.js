const mongoose = require('mongoose')

const { Schema, model } = mongoose
const { ObjectId } = Schema

const grupoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    profesorGuia: {
        _id: {
            type: ObjectId
        },
        nombre: {
            type: String
        }
    },
    estudiantes: [{
        _id: {
            type: ObjectId
        },
        nombre: {
            type: String
        }
    }]
}, {
    timestamps: true
});

module.exports = model('grupo', grupoSchema)