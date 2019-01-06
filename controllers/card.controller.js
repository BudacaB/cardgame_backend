const CardService = require('../services/card.service')
const http = require('axios');

class CardController {

    deck(req, res) {
        res.send(new CardService().getDeck())
    }

    randomizedDeck(req, res) {
        res.send(new CardService().shuffleDeck())
    }

    dealCards(req, res) { 
        let startingDeck = new CardService().shuffleDeck();
        console.log("incepem cu", startingDeck.length)
        res.send(
            new CardService().dealCards(
                startingDeck, 
                startingDeck.length / 2
            )
        )
    }

    compareCards(request, response) {
        let gameRulesApi = 'http://localhost:62588/api/gamerules';
        console.log('Requestul este:', request.body)
        
        let responseCallback = function(rulesResponse) {
            console.log("response", response)
            response.status(200).send(rulesResponse.data)
        }
        
        let errorCallback = (error) => {
            console.log(error.message)
            response.status(500).send('An error has ocurred. Please try again later.')
        }

        return http
                .post(gameRulesApi, [])
                .then(responseCallback)
                .catch(errorCallback);
    }
}

module.exports = CardController