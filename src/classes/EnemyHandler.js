import Enemy from './Enemy'
import {Images} from '../const/assets'
import Utils from '../utils/general'

export default class EnemyHandler {
	constructor(app) {
		this._app = app;
		this.enemiesArray = [];
		this.currentItem = null;
		this.setup();
	}

	setup() {
		this.enemiesArray = [
			new Enemy(Images.ENEMY_RAT, this._app),
			new Enemy(Images.ENEMY_HAND, this._app, {y: this._app.renderer.height / 1.3})
		];

		this.changeCurrentItem();
	}

	changeCurrentItem() {
		const enemyIndex = Utils.randomInt(0, this.enemiesArray.length - 1);

		// Hide the previous item
		if (this.currentItem) {
			this.currentItem.hide();
		}

		this.currentItem = this.enemiesArray[enemyIndex];
		this.currentItem.show();
	}

	loop() {
		if (this.currentItem.isOutOfScreen()) {
			this.changeCurrentItem();
		}

		this.currentItem.loop();

		// this.enemiesArray.forEach((item,i) => {
		// 	item.loop();
		//
		// 	// Check if the item reached it's limit
		// 	// If so sets it to the end of the pile
		// 	if (item._element.x <= -Background.width) {
		// 		item._element.x = Background.width;
		// 	}
		// 	//console.log(i, item._element.x);
		// });
	}

	getElements() {
		return this.enemiesArray.map(i => i.getElement());
	}

	getCurrentItemElement() {
		return this.currentItem.getElement();
	}
}