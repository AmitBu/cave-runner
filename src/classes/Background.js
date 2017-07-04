import ImageAsset from './ImageAsset'
import Base from '../const/base'

export default class Background extends ImageAsset {
    constructor(src, xPos) {
        super(src);

        if (xPos) {
			this._element.x = xPos;
		}
    }

    static width = 1600;

    setup() {
        this._element.vx = -Base.runningSpeed;
    }

    loop() {
        this._element.x += this._element.vx;


    }
}