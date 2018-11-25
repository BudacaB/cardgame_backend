const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')  // cors
const CardService = require('./services/card.service')

let myCardService = new CardService()


// middleware
const logFunction = (req, res, next) => {
    console.log('called', req.path)
    next()
}
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
app.get('/deck', cors(), deckController)
app.listen(port, () => console.log(` app listening on port ${port}!`))


// app.listen(80, showDeck())