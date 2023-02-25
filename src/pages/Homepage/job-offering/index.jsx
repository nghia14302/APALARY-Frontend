import { useEffect, useState } from 'react';

import { Button, Modal, Typography } from 'antd';
import { Editor, EditorState } from 'draft-js';
import { useNavigate, useParams } from 'react-router-dom';

import Box from '../../../components/Box';
import CustomCard from '../../../components/Card';
import jobOfferingApi from '../../../utils/Apis/jobOffering';
import { convertToEditor } from '../../../utils/DraftjsHelper';
import ApplyJob from '../../ApplyJob/index';

import { StepBackwardOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const JobOfferingDetail = () => {
	const params = useParams();
	const navigate = useNavigate();
	const [data, setData] = useState([]);
	const id = params.id;
	const [editorState, setEditorState] = useState(EditorState.createEmpty());

	const [openModel, setOpenModal] = useState(false);
	const showModal = () => {
		setOpenModal(true);
	};
	const handleOk = () => {
		setOpenModal(false);
	};
	const handleCancel = () => {
		setOpenModal(false);
	};

	useEffect(() => {
		const fetch = async () => {
			const response = await jobOfferingApi
				.getOne(id)
				.then((res) => res.data)
				.catch(() => navigate(-1));

			setData(response);
			setEditorState(convertToEditor(JSON.parse(response.description)));
		};
		fetch();
	}, []);

	return (
		<Box
			style={{
				justifyContent: 'center',
				width: '100%',
				padding: '2rem',
			}}
		>
			<CustomCard bordered>
				<Button onClick={() => navigate(-1)} style={{ position: 'absolute' }}>
					<StepBackwardOutlined />
					Back
				</Button>
				{data && (
					<Box direction='vertical'>
						<Box direction='vertical' align='center' style={{ width: '100%' }}>
							<Title>{data.title}</Title>
						</Box>
						<Box direction='vertical'>
							<Text level={5} type='danger'>
								<b>Lương Tới:</b> {data.baseSalary} $
							</Text>
							<Text level={5} type='success'>
								<b>Số lượng tuyển tối đa:</b> {data.maxEmployee}
							</Text>
							<Text level={5}>
								<b>Vị trí làm việc:</b> {data.departmentName}
							</Text>
							<Editor readOnly editorState={editorState}></Editor>
						</Box>
						<Box direction='vertical' align='center' style={{ width: '100%' }}>
							<Button type='primary' onClick={() => showModal()}>
								Apply
							</Button>
						</Box>
					</Box>
				)}
			</CustomCard>
			<Modal open={openModel} onOk={handleOk} onCancel={handleCancel} centered footer={null}>
				<ApplyJob onOk={handleOk} id={id} />
			</Modal>
		</Box>
	);
};

export default JobOfferingDetail;
