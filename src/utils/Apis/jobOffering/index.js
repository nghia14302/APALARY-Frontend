import { get } from '../caller';

const jobOfferingApi = {
	getJobOffering: async () => {
		const endpoint = '/job-offering';
		return await get(endpoint);
	},
};

export default jobOfferingApi;
