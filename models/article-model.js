const mongoose = require('mongoose')
const Schema = mongoose.Schema

let articleSchema = Schema({
    title: String,
    content: String,
    realContent: String,
    category: String,
    author: {type: Schema.Types.ObjectId, ref: 'user'} ,
    imgSrc: String,
    date: String,
},{timestamp: true})

let articles = mongoose.model('Articles',articleSchema)

module.exports = articles