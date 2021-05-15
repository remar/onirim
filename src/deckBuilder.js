class DeckBuilder {
    constructor(deck) {
        this.deck = deck;
    }

    addStandardCards() {
        const cardSpecs = [
            {amount: 8, spec: {type: Card.location, color: Card.blue, symbol: Card.sun}},
            {amount: 4, spec: {type: Card.location, color: Card.blue, symbol: Card.moon}},
            {amount: 3, spec: {type: Card.location, color: Card.blue, symbol: Card.key}},
            {amount: 7, spec: {type: Card.location, color: Card.green, symbol: Card.sun}},
            {amount: 4, spec: {type: Card.location, color: Card.green, symbol: Card.moon}},
            {amount: 3, spec: {type: Card.location, color: Card.green, symbol: Card.key}},
            {amount: 9, spec: {type: Card.location, color: Card.red, symbol: Card.sun}},
            {amount: 4, spec: {type: Card.location, color: Card.red, symbol: Card.moon}},
            {amount: 3, spec: {type: Card.location, color: Card.red, symbol: Card.key}},
            {amount: 6, spec: {type: Card.location, color: Card.tan, symbol: Card.sun}},
            {amount: 4, spec: {type: Card.location, color: Card.tan, symbol: Card.moon}},
            {amount: 3, spec: {type: Card.location, color: Card.tan, symbol: Card.key}},
            {amount: 2, spec: {type: Card.door, color: Card.blue}},
            {amount: 2, spec: {type: Card.door, color: Card.green}},
            {amount: 2, spec: {type: Card.door, color: Card.red}},
            {amount: 2, spec: {type: Card.door, color: Card.tan}},
            {amount: 10, spec: {type: Card.dream}}
        ];
        for(const cardSpec of cardSpecs) {
            for(var i = 0;i < cardSpec.amount;i++) {
                this.deck.putCard(new Card(cardSpec.spec));
            }
        }
    }
}
