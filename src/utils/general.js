export default class General {
	/**
	 * Returns a random number between the given range
	 * @param min
	 * @param max
	 * @returns {*}
	 */
	static randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}