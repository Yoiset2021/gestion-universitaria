const mongoose = require('mongoose')

const { Schema, model } = mongoose

const ciudadSchema = new Schema({
    nombre: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('ciudad', ciudadSchema )