import ImageAsset from './ImageAsset'
import Base from '../const/base'

export default class Runner extends ImageAsset {
    constructor(src, app) {
        super(src, app);

        this.jumping = false;

        // TODO: Make it seem running using multiple frames changing all the time
    }

    static runningSpeed = 0;
    static jumpSpeed = -7;
    static jumpDuration = 900;

	/**
     * Setup function called on init
	 */
	setup() {
		this.setDefaultRunning();

		this._element.scale.set(0.5, 0.5);

		// center the sprite's anchor point
		this._element.anchor.set(0.5);

		// Set the default position of the runner
		this._element.x = this._app.renderer.width / 4;
		this._element.y = this._app.renderer.height / (Base.elementDividerBottom + 0.15);

		// Animation play
		if (this.isAnimation()) {
			this._element.animationSpeed = 0.2;
			this._element.play();
		}
    }

	/**
     * Called each animation frame (60 times per second)
	 */
	loop() {
		this._element.x += this._element.vx;
		this._element.y += this._element.vy;
	}

	/**
     * Creates an animation of jumping
     * Sets the y speed value up, then returns it to default
	 */
	jump() {
        if (this.jumping) {
            return;
        }

        const midDuration = Runner.jumpDuration / 2;

        this.jumping = true;
        this._element.vy = Runner.jumpSpeed;

        // Change speed direction in the middle
		setTimeout(() => {
		    this._element.vy = -Runner.jumpSpeed;

		    // When the entire duration passed - return the speed to default
		    setTimeout(() => {
				this.setDefaultRunning();
				this.jumping = false;
			}, midDuration)
        }, midDuration)

    }

    setDefaultRunning() {
        this._element.vx = Runner.runningSpeed;
        this._element.vy = 0;
    }
}