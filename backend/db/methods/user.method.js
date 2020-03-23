const User = require('../models/User')

const CreateUser = function(userBody) {
    const user = new User(userBody);
    return user.save()
}

const GetUser = function(email) {
    return User.findOne({email: email})
}

const UpdateToken = function(email, token) {
    return User.findOneAndUpdate({ email }, { token })
}

const Logout = function(token) {
    return User.findOneAndUpdate({ token }, { token: '' })
}

module.exports = {
    CreateUser,
    GetUser,
    Logout,
    UpdateToken
}