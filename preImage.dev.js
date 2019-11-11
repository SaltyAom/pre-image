/**
 * Preload images in background idle time.
 * Normally, preImage will loaded resources after browser finished loading all request and continue to load important image which is surely to be displayed.
 * It is expected to be used to preload multiple set of images as simple function in browser idle stage.
 * @param {String} images - Set of images to be preloaded.
 * @param {Object} options - Configure behavior of preImage.
 * @param {Number} options.delay - Default: 0. Add delay before image will be preloaded.
 * @param {Boolean} options.cors - Default: false. Enable cross-origin request as 'Anonymous'
 * @param {Boolean} options.preferWebP - Default: false. Ignore same file format which are not webP, webP are available and supported by client.
 * @returns {Promise} A promise which resolve once images' request is loaded
 */
async function preImage() {
	if (typeof window === "undefined") return false; // Prevent loading from server side.
	if (typeof arguments[0] === "undefined") return false; // Prevent execution in case of no arguments.

	let _images = arguments,
		_options = arguments[arguments.length - 1],
		__delay = _options.delay ? _options.delay : 0,
		__cors = _options.cors ? true : false,
		__preferWebP =
			_options.preferWebP && supportWebP() ? _options.preferWebP : false;

	if (__preferWebP) {
		let imagesList = Object.values(_images);

		for (let image of imagesList) {
			let imageName = image.split(/(.*)\.[^.]+$/)[1],
				imagePart = image.split("."),
				imageExtension = imagePart[imagePart.length - 1].toLowerCase();

			if (
				imageExtension !== "webp" &&
				imagesList.includes(`${imageName}.webp`)
			)
				imagesList.splice(imagesList.indexOf(image), 1);
		}
	}

	let loadingImages = [];

	let returnData = new Promise((resolve) => {
		this.loadComplete = () => {
			resolve(true);
		};
	});

	setTimeout(
		function() {
			for (let image of _images) {
				if (typeof image !== "string") return false;
				let preloadImage = new Image();

				if (__cors) preloadImage.crossOrigin = "Anonymous";
				preloadImage.src = image;

				loadingImages.push(image);
				preloadImage.onload = async function() {
					handleLoadedImage(image, loadingImages);
				};
			}
		},
		__delay,
		loadingImages
	);

	let handleLoadedImage = (image, loadingImages) => {
		loadingImages.splice(loadingImages.indexOf(image), 1);

		if (typeof loadingImages[0] === "undefined") this.loadComplete();
	};

	await returnData;
	return returnData;
}

function supportWebP() {
	let canvas = document.createElement("canvas");

	if ((canvas.getContext && canvas.getContext("2d")))
		return canvas.toDataURL("image/webp").indexOf("data:image/webp") == 0;


	// very old browser like IE 8, doesn't support canvas
	return false;
}

module.exports = preImage;