import { del, get, post, put } from '../caller';

const jobOfferingApi = {
	getJobOffering: async () => {
		const endpoint = '/job-offering';
		return await get(endpoint);
	},
	getOne: async (id) => {
		const endpoint = '/job-offering/' + id;
		return await get(endpoint);
	},
	post: async (data, token) => {
		const endpoint = '/job-offering';
		return await post(endpoint, data, {
			Authorization: 'Bearer ' + token,
		});
	},
	put: async (data, token) => {
		const endpoint = '/job-offering';
		return await put(endpoint, data, {
			Authorization: 'Bearer ' + token,
		});
	},
	delete: async (id, token) => {
		const endpoint = '/job-offering/' + id;
		return await del(
			endpoint,
			{},
			{
				Authorization: 'Bearer ' + token,
			}
		);
	},
};

export default jobOfferingApi;
