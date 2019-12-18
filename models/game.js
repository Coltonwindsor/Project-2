const mongoose = require('./connection.js')

const GameSchema = new mongoose.Schema({
  name: String,
  releaseYear: Number,
  genre: String,
  cover: String
})

const GameCollection = mongoose.model('game', GameSchema)

const getGameById = (id) => {
  return GameCollection.findById(id)
}

const getAllGames = () => {
  return GameCollection.find({})
}


const createGame = (newGame) => {
  return GameCollection.create(newGame)
}

const updateGame = (id, updatedGame) => {
  return GameCollection.updateOne({ _id: id }, updatedGame)
}

const deleteGame = (id) => {
  return GameCollection.deleteOne({ _id: id })
}


module.exports = {
  getGameById,
  getAllGames,
  createGame,
  updateGame,
  deleteGame,
}