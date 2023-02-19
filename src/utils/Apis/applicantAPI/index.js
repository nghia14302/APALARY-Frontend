import { get } from '../caller';

const token =
	'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbXBsb3llZTIiLCJpYXQiOjE2NzY4MDc3NDYsImV4cCI6MTY3NjgwOTE4Nn0.gT5GgrpfFUMfzJGj8JPY2Bs945jjtqeMRl6-RyWWKvQ';
const applicantAPI = {
	get: async () => {
		const endpoint = '/applicant';
		return await get(endpoint, {}, { Authorization: 'Bearer ' + token });
	},
	getOne: async (id) => {
		const endpoint = `/applicant/${id}`;
		return await get(
			endpoint,
			{},
			{
				Authorization: 'Bearer ' + token,
			}
		);
	},
};

export default applicantAPI;
