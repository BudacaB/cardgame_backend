const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')  // cors
const CardService = require('./services/card.service')

let myCardService = new CardService()



// middleware
const logFunction = (request, response, next) => {
    console.log('called', request.path)
    next()
}

/* const activateCors = (request, response, next) => {
    cors()
    console.log('cors_passed')
    next()
}  */

app.use(cors())
app.use(logFunction)




// tests to understand - ignore
/* const defaultRouteFunction = (req, res) => {
    res.send('Hello World!')
} */

//app.get('/', defaultRouteFunction)

/* const adunareFunction = function (req, res) {
    res.status(200).json(1+2)
} */

//app.get('/adunare', adunareFunction)




const deckController = (req, res) => {
    res.send(myCardService.getDeck())
}

const randomizedDeckController = (req, res) => {
    res.send(myCardService.shuffleDeck())
}

app.get('/randomizedDeck', randomizedDeckController)

app.get('/deck', deckController)
app.listen(port, () => console.log(` app listening on port ${port}!`))




