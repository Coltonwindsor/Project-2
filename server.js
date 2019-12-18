
const express = require('express')
const app = express()
const methodOverride = require('method-override')


const { gameRouter } = require('./controllers/game.js')
const { publisherRouter } = require('./controllers/publisher.js')


app.use(express.urlencoded({ extended: true }))


app.use(express.json())


app.use(methodOverride('_method'))


app.use(express.static(__dirname + "/public"))


app.set('view engine', 'hbs')



app.use('/game', gameRouter)
app.use('/publisher', publisherRouter)

const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
