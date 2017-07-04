import ContainerElement from './ContainerElement'
import TextElement from './TextElement'
import ImageAsset from './ImageAsset'

import {Images} from '../const/assets'


export default class GameOverScene extends ContainerElement {
	constructor(app, onRestartClick = () => {}) {
		super(app);

		this._onRestartClick = onRestartClick;

		this.setup();
		// TODO: Add scene container = text + button
	}

	setup() {
		this._textElement = new TextElement('Game Over', '82px Arial', '#000000');
		this._scoreElement = new TextElement('Score: ', '34px Arial');
		this._btnElement = new TextElement('Press to reload', '42px Arial');


		this.addChild(this._textElement);
		this.addChild(this._scoreElement);
		this.addChild(this._btnElement);

		this.moveElement(this._btnElement, 60, 100);
		this.moveElement(this._scoreElement, 140, 150);

		// Pointers normalize touch and mouse
		this.childToButton(this._btnElement, this._onRestartClick);

		// Positioning
		this._element.x = (this._app.renderer.width / 2) - (this._element.width / 2);
		this._element.y = this._app.renderer.height / 4;

		// By default - invisible
		this.hide();
	}

	moveElement(element, xDiff, yDiff) {
		element.getElement().x += xDiff;
		element.getElement().y += yDiff;
	}

	loop(score) {
		this._scoreElement.setText(`Score: ${score}`)
	}

	show() {
		this._element.visible = true;
	}

	hide() {
		this._element.visible = false;
	}
}