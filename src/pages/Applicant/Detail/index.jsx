import React, { useEffect, useState } from 'react';

import { Button, Col, Form, Input, Modal, Row, Skeleton, Typography } from 'antd';
import { useParams } from 'react-router-dom';

import Box from '../../../components/Box';
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
	const onAccept = async () => {
		await apiHandler(applicantAPI, 'accept', 'Success', setLoading, params.id, true, token);
	};
	const onReject = async () => {
		await apiHandler(applicantAPI, 'accept', 'Success', setLoading, params.id, false, token);
	};
	return (
		<CustomCard>
			<Title>Applicant Information</Title>
			{loading ? (
				<Skeleton />
			) : (
				<Form layout='vertical'>
					{applicantFormConfig.map((item) => {
						return (
							<Form.Item
								key={item.label + 'applicant-information'}
								label={item.label}
							>
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
					<PDFReader
						onAccept={onAccept}
						onReject={onReject}
						isWaiting={applicant.status === 'PROCESSING'}
					/>
				</Form>
			)}
		</CustomCard>
	);
};

export default ApplicantDetails;
