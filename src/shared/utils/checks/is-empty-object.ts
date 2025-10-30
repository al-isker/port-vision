export const isEmptyObject = (object?: Record<string, unknown>) => {
	if (object) {
		for (var prop in object) {
			if (object.hasOwnProperty(prop)) {
				return false;
			}
		}
	}

	return true;
};
