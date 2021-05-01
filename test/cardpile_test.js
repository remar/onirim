describe("CardPile", function() {
    it("has 0 cards at first", function() {
	expect(new CardPile().numberOfCards()).toEqual(0);
    });

    it("has most recently added card at top", function() {
	const cardPile = new CardPile();
	cardPile.putCard("Card1");
	expect(cardPile.drawCard()).toEqual("Card1");
    });

    it("has most recently added cards at top", function() {
	const cardPile = new CardPile();
	cardPile.putCard("Card1");
	cardPile.putCard("Card2");
	expect(cardPile.drawCard()).toEqual("Card2");
	expect(cardPile.drawCard()).toEqual("Card1");
    });
});
