class CardService {

    getDeck() {
        let suitLst = ['hearts', 'spades', 'clubs', 'diamonds']
        let cardNumberLst = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']
        let deck = []
        for (let i=0; i < cardNumberLst.length; i++) {
            for (let j=0; j < suitLst.length; j++){ 
                let currentCard = {
                    suit: suitLst[j],
                    number: cardNumberLst[i],
                    id: `${cardNumberLst[i]}_of_${suitLst[j]}`
                };
                deck.push(currentCard)
            }
        }
        return deck
    }

    shuffleDeck() {
        let deck = this.getDeck() 
        for (let i = 0; i < deck.length; i++) {
            let lastCard = deck.pop()
            deck.splice(this.getRandomPositionForDeck(deck), 0, lastCard)
        }
        return deck
    }

    getRandomPositionForDeck(deckParam) {
        let min = 0
        let max = deckParam.length
        let randomPosition = Math.random() * (max - min) + min
        return randomPosition
    }

}

module.exports = CardService


// Task
/* BE:
1.1 new method shuffleDeck
		Input: deck
        Output: randomized deck */
        
