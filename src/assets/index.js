function getImageUrl(name) {
	return new URL(`./${name}.svg`, import.meta.url).href;
}

export default getImageUrl('Logo');
