describe("Game", function() {
    beforeEach(function() {
	this.game = new Game();
    });

    describe("awaiting setup", function() {
	it("has a state", function() {
	    expect(this.game.state).not.toEqual(undefined);
	});

	it("needs to be set up", function() {
	    expect(this.game.state).toEqual(Game.toBeSetup);
	});
    });

    describe("after setup", function() {
	beforeEach(function() {
	    this.game.setup();
	});

	it("has 76 cards", function() {
	    expect(this.game.deck.numberOfCards()).toEqual(76);
	})

	it("is in state EmptyHand", function() {
	    expect(this.game.state).toEqual(Game.emptyHand);
	});

	it("can't be setup again", function() {
	    this.game.setup();
	    expect(this.game.deck.numberOfCards()).toEqual(76);
	});

	describe("has cards:", function() {
	    function countCardsOfType(deck, card) {
		var count = 0;
		while(deck.numberOfCards() > 0) {
		    const drawnCard = deck.drawCard();
		    if(card.equals(drawnCard)) {
			count += 1;
		    }
		}
		return count;
	    }

	    function hasCards(deck, cardSpec, nr) {
		const card = new Card(cardSpec);
		expect(countCardsOfType(deck, card)).toEqual(nr);
	    }

	    function hasLocationCards(deck, color, symbol, nr) {
		hasCards(deck, {type: Card.location, color: color, symbol: symbol}, nr);
	    }

	    function hasDoorCards(deck, color, nr) {
		hasCards(deck, {type: Card.door, color: color}, nr);
	    }

	    it("has 8 blue suns", function() {
		hasLocationCards(this.game.deck, Card.blue, Card.sun, 8);
	    });

	    it("has 4 blue moons", function() {
		hasLocationCards(this.game.deck, Card.blue, Card.moon, 4);
	    });

	    it("has 3 blue keys", function() {
		hasLocationCards(this.game.deck, Card.blue, Card.key, 3);
	    });

	    it("has 7 green suns", function() {
		hasLocationCards(this.game.deck, Card.green, Card.sun, 7);
	    });

	    it("has 4 green moons", function() {
		hasLocationCards(this.game.deck, Card.green, Card.moon, 4);
	    });

	    it("has 3 green keys", function() {
		hasLocationCards(this.game.deck, Card.green, Card.key, 3);
	    });

	    it("has 9 red suns", function() {
		hasLocationCards(this.game.deck, Card.red, Card.sun, 9);
	    });

	    it("has 4 red moons", function() {
		hasLocationCards(this.game.deck, Card.red, Card.moon, 4);
	    });

	    it("has 3 red keys", function() {
		hasLocationCards(this.game.deck, Card.red, Card.key, 3);
	    });

	    it("has 6 tan suns", function() {
		hasLocationCards(this.game.deck, Card.tan, Card.sun, 6);
	    });

	    it("has 4 tan moons", function() {
		hasLocationCards(this.game.deck, Card.tan, Card.moon, 4);
	    });

	    it("has 3 tan keys", function() {
		hasLocationCards(this.game.deck, Card.tan, Card.key, 3);
	    });

	    it("has 2 blue doors", function() {
		hasDoorCards(this.game.deck, Card.blue, 2);
	    });

	    it("has 2 green doors", function() {
		hasDoorCards(this.game.deck, Card.green, 2);
	    });

	    it("has 2 red doors", function() {
		hasDoorCards(this.game.deck, Card.red, 2);
	    });

	    it("has 2 tan doors", function() {
		hasDoorCards(this.game.deck, Card.tan, 2);
	    });

	    it("has 10 dream cards", function() {
		hasCards(this.game.deck, {type: Card.dream}, 10);
	    });

	    it("has no cards of undefined type", function() {
		hasCards(this.game.deck, {}, 0);
	    });
	});
    });

    describe("draw hand", function() {
	beforeEach(function() {
	    this.game.setup();
	});

	it("has 5 cards", function() {
	    this.game.drawHand();
	    expect(this.game.hand.length).toEqual(5);
	});

	it("ends up in shuffle limbo state", function() {
	    this.game.drawHand();
	    expect(this.game.state).toEqual(Game.shuffleLimbo);
	})
    });
});
