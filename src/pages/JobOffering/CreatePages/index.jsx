import React, { useEffect, useState } from 'react';

import { Button, Form, Input, InputNumber, Typography } from 'antd';
import { convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { useParams } from 'react-router-dom';

import Box from '../../../components/Box';
import CustomCard from '../../../components/Card';
import CustomEditor from '../../../components/Editor';
import toast from '../../../components/Toast';
import { apiHandler } from '../../../utils/Apis/handler';
import jobOfferingApi from '../../../utils/Apis/jobOffering';
import { convertToEditor } from '../../../utils/DraftjsHelper';
import { usePersistedState } from '../../../utils/LocalStorage/usePersistedState';
import themeConfig from '../../../utils/Theme';
import { initData } from '../Detail/initData';
import { formConfig } from './formConfig';

import TextArea from 'antd/es/input/TextArea';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const { Title, Text } = Typography;
const PostCreation = () => {
	const params = useParams();
	const [data, setData] = useState(initData);
	const [token, setToken] = usePersistedState('token');
	const [loading, setLoading] = useState(false);
	const [form] = Form.useForm();
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const onSubmit = async () => {
		const formData = form.getFieldsValue();
		const raw = convertToRaw(editorState.getCurrentContent());
		const completedForm = {
			id: params.id,
			...formData,
			description: JSON.stringify(raw),
			// TODO: change to user id when login is done
			employeeId: 1,
		};
		if (params.id) {
			await apiHandler(jobOfferingApi, 'put', 'success', setLoading, completedForm, token);
			return;
		}
		await apiHandler(jobOfferingApi, 'post', 'success', setLoading, completedForm, token);
	};
	// TODO: fix that the input fields don't receive data from fetch
	useEffect(() => {
		const fetch = async () => {
			if (params.id) {
				// const res = await apiHandler(jobOfferingApi, 'getOne', '', null, params.id).then(
				// 	(res) => {
				// 		return res;
				// 	}
				// );
				// setData(res);
				// setEditorState(convertToEditor(JSON.parse(res.description)));
				if (params.id) {
					const res = await jobOfferingApi.getOne(params.id).then((res) => res.data);
					setData(res);
					form.setFieldsValue(res);
					setEditorState(convertToEditor(JSON.parse(res.description)));
				}
			}
		};
		fetch();
	}, []);
	const onFinishFailed = (errorInfo) => {
		toast(errorInfo, 'error');
	};
	return (
		<Box>
			<CustomCard bordered width='800px'>
				<Box direction='vertical'>
					<Box direction='vertical' align='center'>
						{params.id ? (
							<Title level={3}>Edit Post</Title>
						) : (
							<Title>Create New Post</Title>
						)}
					</Box>
					<Box direction='vertical'>
						<Form
							form={form}
							layout='vertical'
							onFinish={onSubmit}
							onFinishFailed={onFinishFailed}
						>
							{formConfig.map((item) => {
								return (
									<Form.Item
										key={item.name + '-post-form'}
										label={item.label}
										name={item.name}
										rules={[...item.rules]}
										initialValue={data[item.name]}
									>
										{
											item.type === 'number' ? (
												<InputNumber style={{ width: '100%' }} />
											) : item.type === 'text' ? (
												<Input style={{ width: '100%' }} />
											) : item.type === 'textarea' ? (
												<TextArea style={{ width: '100%' }} />
											) : null
											// <Input />
										}
									</Form.Item>
								);
							})}
							<Form.Item
								label='Description'
								name='description'
								required
								validateStatus={'error'}
							>
								<Box bordered>
									<CustomEditor
										height='200px'
										required
										editorState={editorState}
										editorStyle={{
											border: '1px solid ' + themeConfig.customColor.border,
											padding: '10px',
											minHeight: '200px',
										}}
										onEditorStateChange={setEditorState}
									/>
								</Box>
							</Form.Item>
							<Form.Item>
								<Button type='primary' htmlType='submit'>
									{params.id ? 'Update' : 'Create'}
								</Button>
							</Form.Item>
						</Form>
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

export default PostCreation;
