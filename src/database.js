const mongoose = require('mongoose');
const { database } = require('./config')
const server = require('./server');

module.exports = app => {
    mongoose.connect(database.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }, (error, res) => {
        if (error) {
            console.log(`Error al conectar con la BD, ${error}`)
        }
        console.log('db is connected')

        //inicializo el servidor despues que la bd esta corriendo
        server(app)
    })

}