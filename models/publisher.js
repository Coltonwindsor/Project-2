
const mongoose = require('./connection.js')

const PublisherSchema = new mongoose.Schema({
    name: String,
    yearEstablished: Number,
    country: String,
    logo: String
})

const PublisherCollection = mongoose.model('publisher', PublisherSchema)

const getPublisherById = (id) => {
    return PublisherCollection.findById(id)
}

const getAllPublishers = () => {
    return PublisherCollection.find({})
}

const createPublisher = (newPublisher) => {
    return PublisherCollection.create(newPublisher)
}

const updatePublisher = (id, updatedPublisher) => {
    return PublisherCollection.updateOne({ _id: id }, updatedPublisher)
}

const deletePublisher = (id) => {
    return PublisherCollection.deleteOne({ _id: id })
}


module.exports = {
    getPublisherById,
    getAllPublishers,
    createPublisher,
    updatePublisher,
    deletePublisher,
}
