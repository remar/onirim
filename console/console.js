class Console {
    constructor(input, output) {
	this.input = input;
	this.output = output;
	this.input.addEventListener("keydown", this.keyDown.bind(this));
    }

    write(text) {
	var p = document.createElement("p");
	p.innerHTML = text;
	this.output.appendChild(p);
	p.scrollIntoView(); // TODO: Doesn't really work, maybe do iframe?
    }

    keyDown(event) {
	if(event.keyCode === 13) {
	    this.write(this.input.value);
	    if(this.input.value === "cls") {
		document.getElementById("out").innerHTML = "";
	    }
	    this.input.value = "";
	}
    }
}
