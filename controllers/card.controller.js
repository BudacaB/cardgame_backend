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
        console.log("incepem cu", startingDeck.length)
        res.send(
            new CardService().dealCards(
                startingDeck, 
                startingDeck.length / 2
            )
        )
    }

}

module.exports = CardController