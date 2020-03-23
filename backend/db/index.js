var mongoose = require('mongoose');

mongoose.connect(process.env.DB_HOST)

const db = mongoose.connection

db.on('error', err => {
    console.log('Error conection')
})

db.once('open', () => {
    console.log('Mongoose Database connection success')
})

module.export = db