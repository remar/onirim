class Card {
    // Types
    static location = 'location';

    // Colors
    static green = 'green';

    // Symbols
    static sun = 'sun';

    constructor(data) {
	this.type = data.type;
	if(data.type === Card.location) {
	    this.color = data.color;
	    this.symbol = data.symbol;
	}
    }
}
