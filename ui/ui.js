var zOrder = 100;

function setup() {
    let app = new PIXI.Application({width: 256, height: 256});
    app.renderer.view.style.position = "absolute";
    app.renderer.view.style.display = "block";
    app.renderer.autoResize = true;
    app.renderer.resize(1480, 720); // TODO: Decide on good size for play area
    document.body.appendChild(app.view);
    
    app.stage.sortableChildren = true;

    const cardTexture = PIXI.Texture.from("card.png");
    const playmat = new PIXI.Sprite(PIXI.Texture.from("playmat.png"));
    playmat.x = 0;
    playmat.y = 0;
    app.stage.addChild(playmat);

    let card;

    app.ticker.add(delta => gameLoop(delta));

    for(var i = 0;i < 5;i++) {
        //Create the card sprite
        card = new PIXI.Sprite(cardTexture);

        card.anchor.set(0.5);

        card.interactive = true;
        card.buttonMode = true;
        card.scale.x = 2;
        card.scale.y = 2;

        card.on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);

        app.stage.addChild(card);

        card.x = 500 + i*40;
        card.y = 300;
    }

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
    this.zIndex = zOrder;
    zOrder++;
}

function onDragEnd() {
    this.alpha = 1;
    this.dragging = false;
    // set the interaction data to null
    this.data = null;
    console.log(this.x + "," + this.y + "," + this.zIndex);
}

function onDragMove() {
    if (this.dragging) {
        const newPosition = this.data.getLocalPosition(this.parent);
        this.x = newPosition.x;
        this.y = newPosition.y;
    }
}
