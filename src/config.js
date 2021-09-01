const dotenv = require('dotenv').config()
module.exports = {
    port: process.env.PORT || 8000,
    database: {
        URI: process.env.MONGODB || 'mongodb://localhost:27017/school'
    }
}