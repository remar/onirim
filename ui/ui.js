function setup() {
    let app = new PIXI.Application({width: 256, height: 256});
    app.renderer.view.style.position = "absolute";
    app.renderer.view.style.display = "block";
    app.renderer.autoResize = true;
    app.renderer.resize(1480, 720); // TODO: Decide on good size for play area
    document.body.appendChild(app.view);
    
    const cardTexture = PIXI.Texture.from("card.png");

    let card;

    //Create the card sprite
    card = new PIXI.Sprite(cardTexture);

    card.anchor.set(0.5);

    card.interactive = true;
    card.buttonMode = true;

    app.ticker.add(delta => gameLoop(delta));

    card.on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);

    app.stage.addChild(card);

    card.x = 500;
    card.y = 300;

    function gameLoop(delta) {
    }
}

function onDragStart(event) {
    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    this.data = event.data;
    this.alpha = 0.7;
    this.dragging = true;
}

function onDragEnd() {
    this.alpha = 1;
    this.dragging = false;
    // set the interaction data to null
    this.data = null;
}

function onDragMove() {
    if (this.dragging) {
        const newPosition = this.data.getLocalPosition(this.parent);
        this.x = newPosition.x;
        this.y = newPosition.y;
    }
}
