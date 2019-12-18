
const mongoose = require('./connection.js')

const CharacterSchema = new mongoose.Schema({
    name: String,
    age: Number,
    description: String,
    image: String
})

const CharacterCollection = mongoose.model('character', CharacterSchema)

const getCharacterById = (id) => {
    return CharacterCollection.findById(id)
}

const getAllCharacters = () => {
    return CharacterCollection.find({})
}

const createCharacter = (newCharacter) => {
    return CharacterCollection.create(newCharacter)
}

const updateCharacter = (id, updatedCharacter) => {
    return CharacterCollection.updateOne({ _id: id }, updatedCharacter)
}

const deleteCharacter = (id) => {
    return CharacterCollection.deleteOne({ _id: id })
}


module.exports = {
    getCharacterById,
    getAllCharacters,
    createCharacter,
    updateCharacter,
    deleteCharacter,
}
