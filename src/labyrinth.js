class Labyrinth {
    constructor() {
	this.cards = [];
    }

    numberOfCards() {
	return this.cards.length;
    }

    isAllowedToPut(card) {
	return (
	    this.cards.length === 0 ||
		card.symbol !== this.cards[this.cards.length - 1].symbol
	);
    }

    put(card) {
	if(this.isAllowedToPut(card)) {
	    this.cards.push(card);
	}
    }

    puttingCardTriggersDoorFind(card) {
	return (this.numberOfCards() >= 2 &&
		this.isAllowedToPut(card) &&
		this.lastTwoCardsHasColor(card.color) &&
		!this.lastThreeCardsHasSameColor());
    }

    lastTwoCardsHasColor(color) {
	return this.cards.slice(-2).every(card => card.color === color);
    }

    lastThreeCardsHasSameColor() {
	if (this.numberOfCards() < 3) {
	    return false;
	}
	var lastThreeCards = this.cards.slice(-3);
	return (lastThreeCards[0].color === lastThreeCards[1].color &&
		lastThreeCards[1].color === lastThreeCards[2].color);
    }
}
