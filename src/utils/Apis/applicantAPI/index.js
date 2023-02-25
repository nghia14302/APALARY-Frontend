import { get, post, put } from '../caller';

const applicantAPI = {
	getProcessing: async (token) => {
		const endpoint = '/applicant/processing';
		return await get(endpoint, {}, { Authorization: 'Bearer ' + token });
	},
	getAccepted: async (token) => {
		const endpoint = '/applicant/accepted';
		return await get(endpoint, {}, { Authorization: 'Bearer ' + token });
	},
	getRejected: async (token) => {
		const endpoint = '/applicant/rejected';
		return await get(endpoint, {}, { Authorization: 'Bearer ' + token });
	},
	getOne: async (id, token) => {
		const endpoint = `/applicant/${id}`;
		return await get(
			endpoint,
			{},
			{
				Authorization: 'Bearer ' + token,
			}
		);
	},
	accept: async (id, isAccepted, token) => {
		const endpoint = `/applicant/accept?applicantId=${id}&isAccepted=${isAccepted}`;
		return await put(endpoint, {}, { Authorization: 'Bearer ' + token });
	},

	createApplicant: async (body) => {
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
