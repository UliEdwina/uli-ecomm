const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
    first_name: {type:String, default: ''},
    last_name: {type:String, default: ''}
})

module.exports = mongoose.model('user', UserSchema)