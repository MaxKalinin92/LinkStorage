// const mongoose = require('mongoose')
const {Schema, model, Types} = require ('mongoose')

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    links: [{type: Types.ObjectId, ref: 'Links'}],
    folders: [{type: Types.ObjectId, ref: 'Folders'}]
})



module.exports('User', userSchema)