describe("Deck", function() {
    it("has 0 cards at first", function() {
	expect(new Deck().numberOfCards()).toEqual(0);
    });

    it("has most recently added card at top", function() {
	const deck = new Deck();
	deck.putCard("Card1");
	expect(deck.drawCard()).toEqual("Card1");
    });

    it("has most recently added cards at top", function() {
	const deck = new Deck();
	deck.putCard("Card1");
	deck.putCard("Card2");
	expect(deck.drawCard()).toEqual("Card2");
	expect(deck.drawCard()).toEqual("Card1");
    });
});
