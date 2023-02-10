import axios from 'axios';

import { get } from '../caller';

const randomUserApi = {
	get: async () => {
		const endpoint = '';
		console.log(await get(endpoint));
		return await get(endpoint);
	},
};

export default randomUserApi;
