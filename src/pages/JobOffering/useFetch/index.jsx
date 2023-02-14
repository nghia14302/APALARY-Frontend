import React, { useEffect } from 'react';

import jobOfferingApi from '../../../utils/Apis/jobOffering';

export const useFetch = (defaultValue = []) => {
	const [data, setData] = React.useState(defaultValue);
	const fetch = async () => {
		const response = await jobOfferingApi.getJobOffering().then((res) => res.data);
		if (response.status === 403) {
			setData([]);
			return;
		}
		setData(response.data);
	};
	useEffect(() => {
		fetch();
	}, []);

	return [data, setData];
};
