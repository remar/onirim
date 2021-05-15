class Game {
    static toBeSetup = 'toBeSetup';
    static emptyHand = 'emptyHand';
    static shuffleLimbo = 'shuffleLimbo';

    constructor() {
        this.deck = new Deck();
        this.hand = new Hand();
        this.limboPile = new CardPile();
        this.gameState = Game.toBeSetup;
    }

    get state() {
        return this.gameState;
    }

    setup() {
        if(this.state === Game.toBeSetup) {
            new DeckBuilder(this.deck).addStandardCards();
            this.deck.shuffle();
            this.gameState = Game.emptyHand;
        }
    }

    drawHand() {
        if(this.state === Game.emptyHand) {
            while(this.hand.numberOfCards() < 5) {
                this.drawCard();
            }
            this.gameState = Game.shuffleLimbo;
        }
    }

    drawCard() {
        const drawnCard = this.deck.drawCard();
        if (drawnCard.type === Card.location) {
            this.hand.putCard(drawnCard);
        } else {
            this.limboPile.putCard(drawnCard);
        }
    }
}
