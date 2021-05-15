class Console {
    constructor(input, output, inputHandler) {
        this.input = input;
        this.output = output;
        this.inputHandler = inputHandler;
        this.input.addEventListener("keydown", this.keyDown.bind(this));
    }

    write(text) {
        var p = document.createElement("p");
        p.innerHTML = text;
        this.output.appendChild(p);
        p.scrollIntoView(); // TODO: Doesn't really work, maybe do iframe?
    }

    clear() {
        this.output.innerHTML = '';
    }

    keyDown(event) {
        if(event.keyCode === 13) {
            this.inputHandler(this.input.value);
            this.input.value = "";
        }
    }
}
