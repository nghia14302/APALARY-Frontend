import { get, post } from '../caller';

const randomUserApi = {
	getUser: async () => {
		const endpoint = '';
		return await get(endpoint);
	},
	createUser: async (name) => {
		const endpoint = '';
		return await post(endpoint, { name: name });
	},
};

export default randomUserApi;
