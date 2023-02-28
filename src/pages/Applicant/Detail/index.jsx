import React, { useEffect, useState } from 'react';

import { Button, Form, Input, Modal, Typography } from 'antd';
import { useParams } from 'react-router-dom';

import CustomCard from '../../../components/Card';
import PDFReader from '../../../components/PDFReder';
import applicantAPI from '../../../utils/Apis/applicantAPI';
import apiHandler from '../../../utils/Apis/handler';
import usePersistedState from '../../../utils/LocalStorage/usePersistedState';
import { applicantFormConfig, gender } from './config';

const { Title } = Typography;
const ApplicantDetails = () => {
	const params = useParams();
	const [token] = usePersistedState('token');
	const [applicant, setApplicant] = React.useState({});
	const [loading, setLoading] = React.useState(false);
	useEffect(() => {
		const fetch = async () => {
			const res = await apiHandler(applicantAPI, 'getOne', '', setLoading, params.id, token);
			// convertBaseToFile(res.cv, 'cv' + res.id);
			setApplicant(res);
		};
		fetch();
	}, []);
	return (
		<CustomCard>
			<Title>Applicant Information</Title>
			<Form layout='vertical'>
				{applicantFormConfig.map((item) => {
					return (
						<Form.Item key={item.label + 'applicant-information'} label={item.label}>
							{item.key == 'gender' ? (
								<Input
									style={{ width: '100%' }}
									value={gender[applicant[item.key]]}
									readOnly
								/>
							) : (
								<Input style={{ width: '100%' }} value={applicant[item.key]} />
							)}
						</Form.Item>
					);
				})}
				<PDFReader />
			</Form>
		</CustomCard>
	);
};

export default ApplicantDetails;
