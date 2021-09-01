const express = require('express');
const app = express();

const morgan = require('morgan');
const path = require('path');
const cors = require('cors')

const database = require('./database');

const estudianteRoutes = require('./routes/estudiantes')
const grupoRoutes = require('./routes/grupos')
const profesorRoutes = require('./routes/profesores')
const ciudadRoutes = require('./routes/ciudades')


//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/estudiantes', estudianteRoutes)
app.use('/api/grupos', grupoRoutes)
app.use('/api/profesores', profesorRoutes)
app.use('/api/ciudades', ciudadRoutes)

//static files
app.use('/public', express.static(path.join(__dirname, 'public')))

//connect to BD, garantizo que primero tenga la bd conectada y despues el servidor)
//Garantizo tener el servidor y la bd en un archivo separado
database(app)

module.exports = app;