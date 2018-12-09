const CardService = require('../services/card.service')

class CardController {

    deckController(req, res) {
        res.send(new CardService().getDeck())
    }

    randomizedDeckController(req, res) {
        res.send(new CardService().shuffleDeck())
    }

    dealCardsController(req, res) {
        let startingDeck = new CardService().shuffleDeck();
        let deck = [startingDeck[0], startingDeck[1], startingDeck[2], startingDeck[3], startingDeck[4], startingDeck[5]]
        res.send(new CardService().dealCards(deck, 2))
    }

}

module.exports = CardController