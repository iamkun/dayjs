export const extend = () => {

	// Create a new object
	let extended = {};

	// Merge the object into the extended object
	const merge = function (obj) {
		for (var prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				// Push each value from `obj` into `extended`
				extended[prop] = obj[prop];
			}
		}
	};

	// Loop through each object and conduct a merge
	for (var i = 0; i < arguments.length; i++) {
		merge(arguments[i]);
	}

	return extended;

};