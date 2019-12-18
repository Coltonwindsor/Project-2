const express = require('express')


const characterApi = require('../models/character.js')

const characterRouter = express.Router()

characterRouter.get('/', (req, res) => {
    characterApi.getAllCharacters()
        .then((allCharacters) => {
            res.render('character/allCharacters', { allCharacters })
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
})

characterRouter.get('/new', (req, res) => {
    res.render('character/createCharacter')
})

characterRouter.get('/edit/:id', (req, res) => {
    const characterId = req.params.id

    characterApi.getCharacterById(characterId)
        .then((character) => {
            res.render('character/editCharacter', { character })
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
})

characterRouter.get('/:id', (req, res) => {
    const characterId = req.params.id

    characterApi.getCharacterById(characterId)
        .then((character) => {
            res.render('character/singleCharacter', { character })
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
})

characterRouter.post('/', (req, res) => {
    const newCharacter = req.body

    characterApi.createCharacter(newCharacter)
        .then(() => {
            res.redirect('/character')
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })

})

characterRouter.put('/:id', (req, res) => {
    const characterId = req.params.id
    const characterData = req.body

    characterApi.updateCharacter(characterId, characterData)
        .then(() => {
            res.redirect(`/character/${characterId}`)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
})

characterRouter.delete('/:id', (req, res) => {
    const characterId = req.params.id

    characterApi.deleteCharacter(characterId)
        .then(() => {
            res.redirect('/character')
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
})


module.exports = {
    characterRouter
}