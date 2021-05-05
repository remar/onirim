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
	    new DeckBuilder(this.deck).addStandardCards();
	    this.gameState = Game.emptyHand;
	}
    }
}
