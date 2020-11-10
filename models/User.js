const Schema = require ('mongoose')



const itemSchema = new Schema({
        title: {type: String},
        hyperlink: {type: String, required: true},
        summary: {type: String},
        tags: [{type: String}],
        websiteLogo: {type: String},
        home: {type: Boolean},
        liked: {type: Boolean},
        archived:{type: Boolean}
})

const folderSchema = new Schema({
    name: {type: String, required: true},
    item: [itemSchema]
})

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    folders: [folderSchema],
    item:[itemSchema]
})



module.exports('User', userSchema)