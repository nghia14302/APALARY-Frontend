import React, { useEffect } from 'react';

import { Form, Input } from 'antd';
import { useParams } from 'react-router-dom';

import Box from '../../../components/Box';
import CustomCard from '../../../components/Card';
import applicantAPI from '../../../utils/Apis/applicantAPI';
import apiHandler from '../../../utils/Apis/handler';
import usePersistedState from '../../../utils/LocalStorage/usePersistedState';
import { applicantFormConfig, gender } from './config';

const ApplicantDetails = () => {
	const params = useParams();
	const [token] = usePersistedState('token');
	const [applicant, setApplicant] = React.useState({});
	const [loading, setLoading] = React.useState(false);

	useEffect(() => {
		const fetch = async () => {
			const res = await apiHandler(applicantAPI, 'getOne', '', setLoading, params.id, token);
			console.log(res);
			setApplicant(res);
		};
		fetch();
	}, []);
	return (
		<CustomCard>
			<Form>
				{applicantFormConfig.map((item) => {
					return (
						<Form.Item key={item.label + 'applicant-information'} label={item.label}>
							{item.key == 'gender' ? (
								<Input value={gender[applicant[item.key]]} readOnly />
							) : (
								<Input value={applicant[item.key]} />
							)}
						</Form.Item>
					);
				})}
			</Form>
		</CustomCard>
	);
};

export default ApplicantDetails;
