class Game {
    static toBeSetup = 'toBeSetup';
    static emptyHand = 'emptyHand';

    constructor() {
	this.deck = new Deck();
	this.gameState = Game.toBeSetup;
    }

    get state() {
	return this.gameState;
    }

    setup() {
	if (this.state === Game.toBeSetup) {
	    this.addStandardCards();
	    this.gameState = Game.emptyHand;
	}
    }

    addStandardCards() {
	for(var i = 0;i < 72;i++) {
	    this.deck.putCard("hej");
	}
    }
}
