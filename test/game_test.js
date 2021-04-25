describe("Game", function() {
    it("has a state", function() {
	const game = new Game();
	expect(game.state).not.toEqual(undefined);
    });

    it("needs to be initialized", function() {
	const game = new Game();
	expect(game.state).toEqual(Game.toBeInitialized);
    });
});
