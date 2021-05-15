function makeCard(spec) {
    types = {
        "L": Card.location,
        "D": Card.door,
        "N": Card.dream // Nightmare...
    };
    colors = {
        "G": Card.green,
        "R": Card.red,
        "B": Card.blue,
        "T": Card.tan
    };
    symbols = {
        "s": Card.sun,
        "m": Card.moon,
        "k": Card.key
    }
    return new Card({
        type: types[spec[0]],
        color: colors[spec[1]],
        symbol: symbols[spec[2]]
    })
}

function makeLocationCard(spec) {
    return makeCard("L" + spec);
}

function deckIsOrdered(deck) {
    var cards = [];
    while(deck.numberOfCards() > 0) {
        cards.push(deck.drawCard());
    }
    if (!cards[0].equals(cards[1]) || !cards[cards.length - 2].equals(cards[cards.length - 1])) {
        return false;
    }
    for(let i = 1;i < cards.length - 1;i++) {
        if (!cards[i - 1].equals(cards[i]) && !cards[i].equals(cards[i + 1])) {
            return false;
        }
    }
    return true;
}
