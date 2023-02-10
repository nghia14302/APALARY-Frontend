const LocalStorageUtils = {
	setItem: (key, value) => {
		if (localStorage === undefined) return false;
		localStorage.setItem(key, JSON.stringify(value));
		return true;
	},

	getItem: (key) => {
		if (localStorage === undefined) return null;
		const item = localStorage.get(key);
		if (!item) return null;
		return JSON.parse(item);
	},

	removeItem: (key) => {
		if (localStorage === undefined) return false;
		localStorage.removeItem(key);
		return true;
	},
};

export default LocalStorageUtils;
