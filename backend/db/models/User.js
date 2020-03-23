var mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    token: String,
})

const User = mongoose.model('User', userSchema);

module.exports = User;
