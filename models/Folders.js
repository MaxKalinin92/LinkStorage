const mongoose = require('mongoose')
const {Schema, model, Types} = mongoose.Schema


const linksSchema = new Schema({
    name: {type: String, required: true},
    users: [{type: Types.ObjectId, ref: 'User'}]

    
})

module.exports('Links', linksScema)