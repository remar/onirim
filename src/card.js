class Card {
    // Types
    static location = 'location';
    static door = 'door';
    static dream = 'dream';

    // Colors
    static green = 'green';
    static blue = 'blue';
    static red = 'red';
    static tan = 'tan';

    // Symbols
    static sun = 'sun';
    static moon = 'moon';
    static key = 'key';

    constructor(data) {
	this.type = data.type;
	if(data.type === Card.location) {
	    this.color = data.color;
	    this.symbol = data.symbol;
	} else if(data.type === Card.door) {
	    this.color = data.color;
	}
    }

    equals(other) {
	return this.type === other.type &&
	    this.color === other.color &&
	    this.symbol === other.symbol;
    }
}
