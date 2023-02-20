import { useEffect, useState } from 'react';

import { Typography } from 'antd';
import { ContentState, Editor, EditorState } from 'draft-js';
import { useParams } from 'react-router-dom';

import Box from '../../../components/Box';
import CustomCard from '../../../components/Card';
import jobOfferingApi from '../../../utils/Apis/jobOffering';
import { convertToEditor } from '../../../utils/DraftjsHelper';
import { initData } from './initData';

const { Title, Text } = Typography;
const PostDetail = () => {
	const params = useParams();
	const [data, setData] = useState(initData);
	const id = params.id;
	const [editorState, setEditorState] = useState(EditorState.createEmpty());

	useEffect(() => {
		const fetch = async () => {
			const response = await jobOfferingApi.getOne(id).then((res) => res.data);
			// if (response.status === 403) {
			// 	return;
			// }
			setData(response);
			setEditorState(
				//TODO: change to convertFromRaw when api ready
				convertToEditor(JSON.parse(response.description))
			);
		};
		fetch();
	}, []);
	return (
		<Box>
			<CustomCard bordered>
				<Box direction='vertical'>
					<Box direction='vertical' align='center'>
						<Title>{data.title}</Title>
					</Box>
					<Box direction='vertical'>
						<Title level={5} type='danger'>
							Lương Tới: {data.baseSalary}
						</Title>
						<Text level={5} type='success'>
							Số lượng tuyển tối đa: {data.maxEmployee}
						</Text>
						<Editor readOnly editorState={editorState}></Editor>
					</Box>
				</Box>
			</CustomCard>
			{/* <CustomCard bordered>
				<Box>
					<Text></Text>
				</Box>
			</CustomCard> */}
		</Box>
	);
};

export default PostDetail;
