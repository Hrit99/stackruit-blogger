const mongoose = require("mongoose")
const schema = mongoose.Schema 
const blogSchema = new schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default: "Unknown"
    },
},{timestamps:true, collection: 'blogs'})

const blog = mongoose.model('blogs', blogSchema);

module.exports = blog