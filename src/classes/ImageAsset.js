import { Sprite, Texture, extras } from 'pixi.js'
// const  = pixi;

export default class ImageAsset {
    constructor(src, app = null) {
        this._src = src;
        this._element = this._getSpriteFromSrc(src);

        // Sets the pixi app object if sent
        if (app) {
            this._app = app;
        }

        this.setup();
    }
    
    setup() {
        // TODO: Fill with setup data
    }

    isOutOfScreen() {
        return this._element.x <= -this._element.width;
    }

    isAnimation() {
        return Array.isArray(this._src);
    }

    _getSpriteFromSrc(src) {
        if (Array.isArray(src)) {
            return new extras.AnimatedSprite(src.map(item => (
                Texture.fromFrame(`${item}`)
			)));
		}

		return Sprite.fromImage(src);
	}

    getElement() {
        return this._element;
    }
}