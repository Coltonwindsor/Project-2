const express = require('express')


const gameApi = require('../models/game.js')

const gameRouter = express.Router()

gameRouter.get('/', (req, res) => {
  gameApi.getAllGames()
    .then((allGames) => {
      res.render('game/allGames', { allGames })
    })
    .catch((error) => {
      console.log(error)
      res.send(error)
    })
})

gameRouter.get('/new', (req, res) => {
  res.render('game/createGame')
})

gameRouter.get('/edit/:id', (req, res) => {
  const gameId = req.params.id

  gameApi.getGameById(gameId)
    .then((game) => {
      res.render('game/editGame', { game })
    })
    .catch((error) => {
      console.log(error)
      res.send(error)
    })
})

gameRouter.get('/:id', (req, res) => {
  const gameId = req.params.id

  gameApi.getGameById(gameId)
    .then((game) => {
      res.render('game/singleGame', { game })
    })
    .catch((error) => {
      console.log(error)
      res.send(error)
    })
})

gameRouter.post('/', (req, res) => {
  const newGame = req.body

  gameApi.createGame(newGame)
    .then(() => {
      res.redirect('/game')
    })
    .catch((error) => {
      console.log(error)
      res.send(error)
    })

})

gameRouter.put('/:id', (req, res) => {
  const gameId = req.params.id
  const gameData = req.body

  gameApi.updateGame(gameId, gameData)
    .then(() => {
      res.redirect(`/game/${gameId}`)
    })
    .catch((error) => {
      console.log(error)
      res.send(error)
    })
})

gameRouter.delete('/:id', (req, res) => {
  const gameId = req.params.id

  gameApi.deleteGame(gameId)
    .then(() => {
      res.redirect('/game')
    })
    .catch((error) => {
      console.log(error)
      res.send(error)
    })
})



module.exports = {
  gameRouter
}
