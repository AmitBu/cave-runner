import { Container } from 'pixi.js'

export default class ContainerElement {
	constructor(app) {
		this._element = new Container();
		this._app = app;
	}

	setup() {
		// TODO: Setup stuff
	}

	addChild(child) {
		this._element.addChild(child.getElement());
	}

	childToButton(child, callback) {
		const element = child.getElement();
		// Opt-in to interactivity
		element.interactive = true;
		// Shows hand cursor
		element.buttonMode = true;

		element.on('pointerdown', callback)
	}

	getElement() {
		return this._element;
	}
}