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

}

module.exports = CardService


// Task
/* BE:
1.1 new method shuffleDeck
		Input: deck
		Output: randomized deck */