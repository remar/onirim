class Deck extends CardPile {
    shuffle() {
        // Steal with pride: https://stackoverflow.com/a/46545530
        this.cards = this.cards
            .map(a => ({sort: Math.random(), value: a}))
            .sort((a, b) => a.sort - b.sort)
            .map(a => a.value);
    }
}
