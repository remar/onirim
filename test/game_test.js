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

	it("has 72 cards", function() {
	    expect(this.game.deck.numberOfCards()).toEqual(72);
	})

	it("is in state EmptyHand", function() {
	    expect(this.game.state).toEqual(Game.emptyHand);
	});

	it("can't be setup again", function() {
	    this.game.setup();
	    expect(this.game.deck.numberOfCards()).toEqual(72);
	});
    })
});
