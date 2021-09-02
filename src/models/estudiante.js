const mongoose = require('mongoose')

const { Schema, model } = mongoose
const { ObjectId } = Schema

const estudianteSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        indexes: { unique: true },
        lowercase: true,
        required: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
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