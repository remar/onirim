class Deck {
    constructor() {
	this.cards = [];
    }

    numberOfCards() {
	return this.cards.length;
    }

    putCard(card) {
	this.cards.push(card);
    }

    drawCard() {
	return this.cards.pop();
    }
}
