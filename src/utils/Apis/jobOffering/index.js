import { get, post } from '../caller';

const token =
	'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbXBsb3llZTEiLCJpYXQiOjE2NzY5MDk4OTYsImV4cCI6MTY3NjkxMTMzNn0.-kz94DAi706cz5nho_WYpcWnpdhtaGL1tTmNIJ1-VYY';

const jobOfferingApi = {
	getJobOffering: async () => {
		const endpoint = '/job-offering';
		return await get(endpoint);
	},
	getOne: async (id) => {
		const endpoint = '/job-offering/' + id;
		return await get(endpoint);
	},
	post: async (data) => {
		const endpoint = '/job-offering';
		return await post(endpoint, data, {
			Authorization: 'Bearer ' + token,
		});
	},
};

export default jobOfferingApi;
