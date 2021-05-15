class OnirimConsole {
    constructor(input, output) {
        this.game = new Game();
        this.console = new Console(input, output, this.inputHandler.bind(this));
        this.console.write("Welcome to Onirim - Console Version");
    }

    inputHandler(text) {
        const commands = {
            p: this.printState.bind(this),
            setup: this.setup.bind(this),
            draw: () => this.game.drawHand(),
            cls: () => this.console.clear()
        };
        if(Object.keys(commands).includes(text)) {
            commands[text]();
        } else {
            this.console.write("Unrecognized command: " + text);
        }
    }

    printState() {
        this.console.write("------------------------");
        this.console.write("Deck: " + this.game.deck.numberOfCards());
        this.console.write("Hand: " + this.game.hand.numberOfCards());
        this.console.write("Limbo: " + this.game.limboPile.numberOfCards());
    }

    setup() {
        if(this.game.state === Game.toBeSetup) {
            this.console.write("Setting up game");
            this.game.setup();
        }
    }
}
