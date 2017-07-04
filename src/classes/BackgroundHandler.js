import Background from './Background'

export default class BackgroundHandler {
    constructor(src) {
        this.backgroundSrc = src;
        this.backgroundArray = [];

        this.setup();
    }

    setup() {
    	this.backgroundArray = [
    		new Background(this.backgroundSrc),
    		new Background(this.backgroundSrc, Background.width)
		];
	}

	loop() {
    	this.backgroundArray.forEach((item,i) => {
    		item.loop();
    		
    		// Check if the item reached it's limit
			// If so sets it to the end of the pile
			if (item.isOutOfScreen()) {
				item._element.x = Background.width;
			}
			//console.log(i, item._element.x);
		});
	}

	getElements() {
    	return this.backgroundArray.map(i => i.getElement());
	}
}