const express = require('express')
const app = express()
const port = 3000
const logFunction = (req, res, next) => {
    console.log('called', req.path)
    next()
}
app.use(logFunction)

/* const defaultRouteFunction = (req, res) => {
    res.send('Hello World!')
} */

//app.get('/', defaultRouteFunction)

/* const adunareFunction = function (req, res) {
    res.status(200).json(1+2)
} */

//app.get('/adunare', adunareFunction)


const getDeck = () => {
    let suite = ['hearts', 'spades', 'clubs', 'diamond']
    let cardNumber = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    let deck = []
    for (i=0; i < cardNumber.length; i++) {
        for (j=0; j < suite.length; j++){
            let currentNumber = cardNumber[i]
            let currentSuite = suite[j]
            let currentCard = {
                suite: currentSuite,
                number: currentNumber
            };
            deck.push(currentCard)
        }
    }
    return deck
}

const showDeck = (req, res) => {
    res.send(getDeck())
}
app.get('/deck', showDeck)
app.listen(port, () => console.log(` app listening on port ${port}!`))


