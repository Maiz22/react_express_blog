const express = require('express')
const route = express.Router()
const Entry = require('../models/entry')
const mongoose = require('mongoose')

//get element by id middleware
async function getEntryById(req, res, next) {
    let entry = null
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid entry ID' })
        }
        entry = await Entry.findById(req.params.id)
        if (entry === null) {
            return res
                .status(404)
                .json({ message: `Cannot find entry with ID ${req.params.id}` })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.entry = entry
    next()
}

//GET all entries
route.get('/', async (req, res) => {
    try {
        let entries = await Entry.find()
        return res.json(entries)
    } catch (err) {
        res.status(500).json({ message: res.message })
    }
})

//POST/CREATE new entry
route.post('/new/', async (req, res) => {
    const entry = new Entry({
        title: req.body.title,
        description: req.body.description,
    })
    try {
        const newEntry = await entry.save()
        res.status(201).json(newEntry)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//GET single entry
route.get('/:id', getEntryById, (req, res) => {
    res.json(res.entry)
})

module.exports = route
