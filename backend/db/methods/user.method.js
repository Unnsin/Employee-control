const User = require('../models/User')

const CreateUser = async function(userBody) {
    const existUser = await User.findOne({ email: userBody.email })
    if(existUser) {
        throw new Error('Duplicate email')
    }
    const user = new User(userBody);
    await user.save()
    return user
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