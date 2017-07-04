import * as pixi from 'pixi.js'
const { Text } = pixi;

export default class TextElement {
	constructor(message = '', font = '32 Arial', color = '#FFFFFF', app = null) {
		this._element = new Text(message, {
			font,
			fill: color
		});

		// Sets the pixi app object if sent
		if (app) {
			this._app = app;
		}

		this.setup();
	}

	setup() {
		// TODO: Fill with setup data
	}

	setText(text) {
		this._element.text = text;
	}

	isOutOfScreen() {
		return this._element.x <= -this._element.width;
	}

	getElement() {
		return this._element;
	}
}