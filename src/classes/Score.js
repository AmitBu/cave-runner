import TextElement from './TextElement'

const scoreMessage = (score = 0) => `Score: ${score}`;

export default class Score extends TextElement {
    constructor(app) {
    	super(scoreMessage()); // TODO: Send app

        this._score = 0;

		this._element.position.set(10,10);
    }

    setup() {

	}

	loop() {
		this.increase();
		this.setText(scoreMessage(this.getScore()));
	}

    increase() {
    	this._score++;
	}

	getScore() {
    	return Math.round(this._score / 5);
	}
}