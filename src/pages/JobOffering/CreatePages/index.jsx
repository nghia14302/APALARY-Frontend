import React, { useState } from 'react';

import { Button, Form, Input, InputNumber, Typography } from 'antd';
import { convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import Box from '../../../components/Box';
import CustomCard from '../../../components/Card';
import CustomEditor from '../../../components/Editor';
import themeConfig from '../../../utils/Theme';
import { initData } from '../Detail/initData';
import { formConfig } from './formConfig';

import TextArea from 'antd/es/input/TextArea';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const { Title, Text } = Typography;
const PostCreation = () => {
	const [data, setData] = useState(initData);
	const [form] = Form.useForm();
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const [status, setStatus] = useState('error');
	const onSubmit = () => {
		console.log(form.getFieldsValue());
		console.log(editorState);
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	const validateDescription = () => {
		console.log(editorState.getCurrentContent());
		if (editorState.getCurrentContent() || editorState.getCurrentContent() === '') {
			setStatus('error');
			return;
		}
		setStatus('success');
	};
	return (
		<Box>
			<CustomCard bordered width='800px'>
				<Box direction='vertical'>
					<Box direction='vertical' align='center'>
						<Title>Create New Post</Title>
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
									>
										{item.Element}
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
									Create
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
