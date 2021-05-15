class Game {
    static toBeSetup = 'toBeSetup';
    static emptyHand = 'emptyHand';
    static shuffleLimbo = 'shuffleLimbo';

    constructor() {
        this.deck = new Deck();
        this.hand = [];
        this.gameState = Game.toBeSetup;
    }

    get state() {
        return this.gameState;
    }

    setup() {
        if(this.state === Game.toBeSetup) {
            new DeckBuilder(this.deck).addStandardCards();
            this.gameState = Game.emptyHand;
        }
    }

    drawHand() {
        if(this.state === Game.emptyHand) {
            while(this.hand.length < 5) {
                this.hand.push(this.deck.drawCard());
            }
            this.gameState = Game.shuffleLimbo;
        }
    }
}
