import { post } from '../caller';

const authApi = {
	login: async (body) => {
		const endpoint = '/auth/login';
		return await post(endpoint, body);
	},
};

export default authApi;
