describe("Card", function() {
    it("can be a door card", function() {
	const card = new Card({type: Card.door, color: Card.blue});
	expect(card.color).toEqual(Card.blue);
    });
});
