import React from 'react';

import { useParams } from 'react-router-dom';

import Box from '../../../components/Box';
import CustomCard from '../../../components/Card';

const ApplicantDetails = () => {
	const params = useParams();
	const [applicant, setApplicant] = React.useState({});
	const [loading, setLoading] = React.useState(false);

	return (
		<CustomCard>
			<Box></Box>
		</CustomCard>
	);
};

export default ApplicantDetails;
