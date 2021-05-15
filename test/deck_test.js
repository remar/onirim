describe("Deck", function() {
    beforeEach(function() {
        this.deck = new Deck();
        new DeckBuilder(this.deck).addStandardCards();
    });

    it("is ordered after standard setup", function() {
        expect(deckIsOrdered(this.deck)).toEqual(true);
    });

    it("is not ordered after shuffle", function() {
        this.deck.shuffle();
        expect(deckIsOrdered(this.deck)).toEqual(false);
    });
});
