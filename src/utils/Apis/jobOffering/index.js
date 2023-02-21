import { del, get, post } from '../caller';

const token =
	'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbXBsb3llZTEiLCJpYXQiOjE2NzY5NjQxNzYsImV4cCI6MTY3Njk2NTYxNn0.iihPn0UhDxkWISfAqcZhqZyLrJA_mCC5WkcNqNBjXgc';

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
	delete: async (id) => {
		const endpoint = '/job-offering/' + id;
		return await del(endpoint);
	},
};

export default jobOfferingApi;
