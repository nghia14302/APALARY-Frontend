import { get, post } from '../caller';

const token = localStorage.getItem('token');
const applicantAPI = {
	get: async () => {
		const endpoint = '/applicant';
		return await get(endpoint);
	},
	getOne: async (id) => {
		const endpoint = `/applicant/${id}`;
		return await get(endpoint);
	},
	createApplicant: async (body) => {
		console.log(body);
		const endpoint = `/applicant`;
		try {
			return await post(endpoint, body);
		} catch (error) {
			console.log(error);
			return false;
		}
	},
};

export default applicantAPI;
