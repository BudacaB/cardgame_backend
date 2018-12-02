class CardService {

    getDeck() {
        let suitLst = ['hearts', 'spades', 'clubs', 'diamonds']
        //let cardNumberLst = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']
        
        let cardNumberLst = [
            {
                value: 2,
                show: '2'
            },
            {
                value: 3,
                show: '3'
            },
            {
                value: 4,
                show: '4'
            },
            {
                value: 5,
                show: '5'
            },
            {
                value: 6,
                show: '6'
            },
            {
                value: 7,
                show: '7'
            },
            {
                value: 8,
                show: '8'
            },
            {
                value: 9,
                show: '9'
            },
            {
                value: 10,
                show: '10'
            },
            {
                value: 12,
                show: 'jack'
            },
            {
                value: 13,
                show: 'queen'
            },
            {
                value: 14,
                show: 'king'
            },
            {
                value: 15,
                show: 'ace'
            },
        ]

        let deck = []
        for (let i=0; i < cardNumberLst.length; i++) {
            for (let j=0; j < suitLst.length; j++){ 
                let currentCard = {
                    suit: suitLst[j],
                    number: cardNumberLst[i].show,
                    id: `${cardNumberLst[i].show}_of_${suitLst[j]}`
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

    // -> 52 // from 52 -> 52 / 2 to player (26) // 52 - 52 / 2 left (26)
    dealCards(initialDeck, howMany) {
        console.log(howMany)
        // initialDeck = this.shuffleDeck()
        // howMany = initialDeck.length / 2
        
        let dealtCards = []
        let leftCards = []

        for (let i = 0; i <= howMany - 1; i++){
            let dealtCard = initialDeck.shift()
            //dealtCards = dealtCards.splice(0, 0, dealtCard)
            dealtCards.push(dealtCard)
            leftCards = initialDeck
        }

        // return firstResult = [dealtCards, leftCards]
        

       /*  let leftDeck = initialDeck;

        let dealtCards = this.shuffleDeck().deck.length / 2
        let leftCardsNumber = this.shuffleDeck().deck.length - this.shuffleDeck().deck.length / 2 */
        

        let result = {
            dealtDeck: dealtCards,
            leftDeck: leftCards
        }
        return result
    }
    
    compareCards(firstCard, secondCard){
        if (firstCard.value < secondCard.value) {
            return -1;
        } else if (firstCard.value === secondCard.value) {
            return 0;
        } else if (firstCard.value > secondCard.value) {
            return -1;
        }
    }



}

module.exports = CardService



        
