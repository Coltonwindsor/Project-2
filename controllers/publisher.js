const express = require('express')


const publisherApi = require('../models/publisher.js')

const publisherRouter = express.Router()

publisherRouter.get('/', (req, res) => {
    publisherApi.getAllPublishers()
        .then((allPublishers) => {
            res.render('publisher/allPublishers', { allPublishers })
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
})

publisherRouter.get('/new', (req, res) => {
    res.render('publisher/createPublisher')
})

publisherRouter.get('/edit/:id', (req, res) => {
    const publisherId = req.params.id

    publisherApi.getPublisherById(publisherId)
        .then((publisher) => {
            res.render('publisher/editPublisher', { publisher })
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
})

publisherRouter.get('/:id', (req, res) => {
    const publisherId = req.params.id

    publisherApi.getPublisherById(publisherId)
        .then((publisher) => {
            res.render('publisher/singlePublisher', { publisher })
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
})

publisherRouter.post('/', (req, res) => {
    const newPublisher = req.body

    publisherApi.createPublisher(newPublisher)
        .then(() => {
            res.redirect('/publisher')
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })

})

publisherRouter.put('/:id', (req, res) => {
    const publisherId = req.params.id
    const publisherData = req.body

    publisherApi.updatePublisher(publisherId, publisherData)
        .then(() => {
            res.redirect(`/publisher/${publisherId}`)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
})

publisherRouter.delete('/:id', (req, res) => {
    const publisherId = req.params.id

    publisherApi.deletePublisher(publisherId)
        .then(() => {
            res.redirect('/publisher')
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
})


module.exports = {
    publisherRouter
}