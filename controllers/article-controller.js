const Article = require('../models/article-model')
const jwt = require('jsonwebtoken')
const moment = require('moment')

class Controller {
    static getData (req,res) {
        console.log('work fine get Data')
        Article.find()
        .populate('author')
        .then(articles=> {
            res.json({
                articles,
                message: 'get all data'
            })
        })
        .catch(err=> {
            res.json({
                message: err.message
            })
        })
    }
    static postData (req,res) {
        let decoded = jwt.verify(req.headers.token, 'superfox')
        let user = decoded.userId
        let obj = {
            title: req.body.title,
            content: req.body.content,
            realContent: req.body.realContent,
            category: req.body.category,
            imgSrc: req.body.imgSrc,
            date: moment().format('ll'),
            author: user
        }
        let newArticle = new Article(obj)
        newArticle.save()
        .then(article=> {
            res.json({
                message: 'Berhasil posting',
                article
            })
        })
        .catch(err=> {
            res.json({
                message: err.message
            })
        })
    }
    static getOneData (req,res) {
        let query = req.params.id
        Article.findById({
            _id: query
        })
        .populate('author')
        .then(article=> {
            res.json({
                article,
                message: 'get one data'
            })
        })
        .catch(err=> {
            res.json({
                message: err.message
            })
        })
    }
    static removeOne(req,res){
        Article.findByIdAndRemove({_id: req.params.id})
        .then(()=> {
            res.status(200).json({
                message: 'waduh kedelete patrick'
            })
        })
        .catch(err=> {
            res.status(400).json({
                message: er.message
            })
        })
    }
    static updateOne(req,res) {
        let query = req.params.id
        let obj = {
            title: req.body.title,
            content: req.body.content,
            realContent: req.body.realContent,
            category: req.body.category,
            imgSrc: req.body.imgSrc
        }
        Article.findByIdAndUpdate({_id: query},obj)
        .then(articleUpdated=> {
            res.status(200).json({
                message: 'Berhasil update',
                articleUpdated
            })
        })
        .catch(err=> {
            res.status(400).json({
                message: err.message
            })
        })
    }
    static getCategory(req, res) {
        let query = req.params.category
        Article.find({category: query})
        .then(article=> {
            res.json({
                message: 'get by category',
                article
            })
        })
        .catch(err=> {
            res.json({
                message: err.message
            })
        })
    }
    static getAuthor(req, res) {
        let query = req.params.author
        Article.find({author: query})
        .then(article=> {
            res.json({
                message: 'get by author',
                article
            })
        })
        .catch(err=> {
            res.json({
                message: err.message
            })
        })
    }
}

module.exports = Controller