import * as pixi from 'pixi.js'
import Base from './const/base'
import { Images } from './const/assets'
import Keyboard from './utils/keyboard'
import BackgroundHandler from './classes/BackgroundHandler'
import EnemyHandler from './classes/EnemyHandler'
import Runner from './classes/Runner'
import Score from './classes/Score'
import GameOverScene from './classes/GameOverScene'
import Bump from './utils/detectCollision'
// import hit from './utils/testCollision'

const STATES = {
	start: 'start',
	stop: 'stop'
};

const KEY_SPACE = 32;

let { Application, loader } = pixi;

let app = new Application(Base.width, Base.height, { backgroundColor: Base.backgroundColor });
document.body.appendChild(app.view);

// Turns images object to array - to insert to to loader
let imagesArray = Object.keys(Images).map(k => Images[k]);
// Flatten inner array's to one list to load
imagesArray = [].concat.apply([], imagesArray);

loader
	.add(imagesArray)
	.load(setup);

function setup() {
	const score = new Score();
	const bump = new Bump(pixi);

	// create a new Sprite from an image path
	let backgroundHandler = new BackgroundHandler(Images.BACKGROUND);
	let state = STATES.start;
	let gameOverScene = new GameOverScene(app, () => {
		// TODO: Make restart work
		// console.log("asdasd");
		// app.stage.destroy();
		// setup();
		// reload();
		// app.ticker.start();
	});
	let enemyHandler = new EnemyHandler(app);
	let runner = new Runner(Images.RUNNER, app);

	let enemyElements = enemyHandler.getElements();

	// Insert multiple background elements to stage
	app.stage.addChild(...backgroundHandler.getElements());
	app.stage.addChild(...enemyElements);
	app.stage.addChild(gameOverScene.getElement());
	app.stage.addChild(runner.getElement());
	app.stage.addChild(score.getElement());

	// Define keyboard object for space key (ASCII - 32)
	const spaceKey = Keyboard(KEY_SPACE);

	function reload() {
		location.reload();
	}

	spaceKey.press = () => {
		if (state === STATES.start) {
			runner.jump();
		}
		else {
			reload();
		}
	};

	// Listen for animate update
	app.ticker.add(function (delta) {
		score.loop();

		backgroundHandler.loop();
		enemyHandler.loop();
		runner.loop();
		gameOverScene.loop(score.getScore());

		// Check if runner collides with current enemy
		if (bump.hitTestCircleRectangle(runner.getElement(), enemyHandler.getCurrentItemElement())) {
			gameOverScene.show();

			setTimeout(() => {
				state = STATES.stop;
				app.ticker.stop();
			}, 50)
		}
	});
}


// TODO: Improve Detect collision - make it less strict
// TODO: Game over text as image + reload btn
// TODO: Start game scene
// TODO: Creepy music
// TODO: Add new enemies


// TBD
// TODO: Make game faster in time