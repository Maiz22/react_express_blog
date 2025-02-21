const express = require('express')
const route = express.Router()
const Article = require('../models/article')
const mongoose = require('mongoose')

//get element by id middleware
async function getArticleById(req, res, next) {
    let article = null
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid article ID' })
        }
        article = await Article.findById(req.params.id)
        if (article === null) {
            return res.status(404).json({
                message: `Cannot find article with ID ${req.params.id}`,
            })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.article = article
    next()
}

//GET all articles
route.get('/', async (req, res) => {
    try {
        let articles = await Article.find()
        return res.json(articles)
    } catch (err) {
        res.status(500).json({ message: res.message })
    }
})

//POST/CREATE new article
route.post('/new/', async (req, res) => {
    console.log(req.body)
    const article = new Article({
        content: req.body.content,
    })
    try {
        const newArticle = await article.save()
        res.status(201).json(newArticle)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//GET single article
route.get('/:id', getArticleById, (req, res) => {
    res.json(res.article)
})

//DELETE single article
route.delete('/:id', getArticleById, async (req, res) => {
    try {
        const response = await Article.findOneAndDelete({ _id: req.params.id })
        console.log(response)
    } catch (error) {
        console.log(error)
    }
})

module.exports = route
