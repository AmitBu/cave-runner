import ImageAsset from './ImageAsset'
import Base from '../const/base'

export default class Enemy extends ImageAsset {
    constructor(src, app) {
        super(src, app);
    }

    setup() {
        // TODO: Setup values
        // Default visibility false
        this.hide();

        this._element.scale.set(0.7 , 0.7);

        this._element.vx = -Base.runningSpeed;
		// move the sprite to the center of the screen
		this._element.x = this._app.renderer.width;
		this._element.y = this._app.renderer.height / Base.elementDividerBottom;
    }

    loop() {
        this._element.x += this._element.vx;
        //console.log("Rat", this.isOutOfScreen());
    }

    show() {
        this.setup();
        this._element.visible = true;
    }

    hide() {
        this._element.visible = false;
    }
}