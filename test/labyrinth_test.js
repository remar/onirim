describe("Labyrinth", function() {
    beforeEach(function() {
	this.labyrinth = new Labyrinth();
    });

    function makeLocationCard(spec) {
	colors = {
	    "G": Card.green,
	    "R": Card.red
	};
	symbols = {
	    "s": Card.sun,
	    "m": Card.moon
	}
	return new Card({
	    type: Card.location,
	    color: colors[spec[0]],
	    symbol: symbols[spec[1]]
	})
    }

    function addCards(labyrinth, cards) {
	cards.forEach(c => labyrinth.put(makeLocationCard(c)));
    }
    
    it("is empty from the beginning", function() {
	expect(this.labyrinth.numberOfCards()).toEqual(0);
    });

    it("is allowed to put any card when labyrinth is empty", function() {
	expect(this.labyrinth.isAllowedToPut("whatever")).toEqual(true);
    });

    it("contains one card after one card is put", function() {
	this.labyrinth.put("Card");
	expect(this.labyrinth.numberOfCards()).toEqual(1);
    });

    it("disallows putting card with same symbol", function() {
	addCards(this.labyrinth, ["Gs"]);
	expect(this.labyrinth.isAllowedToPut(makeLocationCard("Gs"))).toEqual(false);
    });

    it("triggers door finding when third card with same color is placed", function () {
	addCards(this.labyrinth, ["Gs", "Gm"]);
	expect(this.labyrinth.puttingCardTriggersDoorFind(makeLocationCard("Gs"))).toEqual(true);
    });

    it("doesn't put card if not allowed", function() {
	addCards(this.labyrinth, ["Gs", "Gs"]);
	expect(this.labyrinth.numberOfCards()).toEqual(1);
    });

    it("triggers door finding when third card with same color is placed", function () {
	addCards(this.labyrinth, ["Rm", "Rs", "Rm", "Gs", "Gm"]);
	expect(this.labyrinth.puttingCardTriggersDoorFind(makeLocationCard("Gs"))).toEqual(true);
    });

    it("does not trigger a door if last card triggered a door", function() {
	addCards(this.labyrinth, ["Gs", "Gm", "Gs"]);
	expect(this.labyrinth.puttingCardTriggersDoorFind(new Card(Card.green, Card.moon))).toEqual(false);
    });

    it("does not trigger a door if next to last card triggered a door", function() {
	addCards(this.labyrinth, ["Gs", "Gm", "Gs", "Gm"]);
	expect(this.labyrinth.puttingCardTriggersDoorFind(new Card(Card.green, Card.sun))).toEqual(false);
    });
});
