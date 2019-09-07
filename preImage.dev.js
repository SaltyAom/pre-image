/**
 * Preload images in background idle time.
 * Normally, preImage will loaded resources after browser finished loading all request and continue to load important image which is surely to be displayed.
 * It is expected to be used to preload multiple set of images as simple function in browser idle stage.
 * eg: preImage("/mock1.jpg", "/mock2.png", "https://mystiar.com/shino.png", { background: false })
 * @param {String} images - Set of images to be preloaded.
 * @param {Object} options - Configure behavior of preImage.
 * @param {Boolean} options.background - Default: true. Preload image when browser is idle. If set to false, image will be loaded imediately.
 * @param {Number} options.delay - Default: 0. Add delay before image will be preloaded.
 */
function preImage(images, options) {
	if (typeof window === "undefined") return false; // Prevent loading from server side.
	if (typeof arguments[0] === "undefined") return false; // Prevent execution in case of no arguments.

	let _images = arguments,
		_options = arguments[arguments.length - 1],
		background = _options.background ? _options.background : true,
		delay = _options.delay ? _options.delay : 0;

	if (background === true) {
		setTimeout(function() {
			for (let image of _images) {
				if (typeof image !== "string") return false;

				let HTMLImageElement = new Image();
				HTMLImageElement.src = image;
			}
			return true;
		}, delay);
	}

	setTimeout(function() {
		for (let image of _images) {
			if (typeof image !== "string") return false;

			let HTMLImageElement = new Image();
			HTMLImageElement.src = image;
		}
	}, delay);
	return true;
}

module.exports = preImage;
