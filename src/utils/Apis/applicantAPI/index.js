import { get } from '../caller';

const token = '';
const applicantAPI = {
	get: async () => {
		const endpoint = '/applicant';
		return await get(endpoint);
	},
	getOne: async (id) => {
		const endpoint = `/applicant/${id}`;
		return await get(endpoint);
	},
};

export default applicantAPI;
