const mongoose = require('mongoose')

const { Schema, model } = mongoose
const { ObjectId } = Schema

const estudianteSchema = new Schema({
    nombre: {
        type: String
    },
    edad: {
        type: Number
    },
    sexo: {
        type: String
    },
    email: {
        type: String,
        indexes: { unique: true },
        lowercase: true
    },
    fechaNacimiento: {
        type: Date
    },
    ciudad: {
        _id: {
            type: ObjectId
        },
        nombre: {
            type: String
        }
    },
    grupo: {
        _id: {
            type: ObjectId
        },
        nombre: {
            type: String
        }
    }
}, {
    timestamps: true
});

module.exports = model('estudiante', estudianteSchema)