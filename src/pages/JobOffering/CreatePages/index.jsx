import React, { useState } from 'react';

import { Button, Form, Input, Typography } from 'antd';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import Box from '../../../components/Box';
import CustomCard from '../../../components/Card';
import CustomEditor from '../../../components/Editor';
import { initData } from '../Detail/initData';
import { formConfig } from './formConfig';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const { Title, Text } = Typography;
const PostCreation = () => {
	const [data, setData] = useState(initData);
	const [form] = Form.useForm();
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	return (
		<Box>
			<CustomCard bordered width='800px'>
				<Box direction='vertical'>
					<Box direction='vertical' align='center'>
						<Title>Create New Post</Title>
					</Box>
					<Box direction='vertical'>
						<Form form={form} layout='vertical'>
							{formConfig.map((item) => {
								return (
									<Form.Item
										key={item.name + '-post-form'}
										label={item.label}
										name={item.name}
										rules={item.rules}
									>
										<Input type={item.type} />
									</Form.Item>
								);
							})}
							<Form.Item label='Description' name='description'>
								<Box bordered>
									<CustomEditor
										height='200px'
										editorState={editorState}
										onEditorStateChange={setEditorState}
									/>
								</Box>
							</Form.Item>
							<Form.Item>
								<Button type='primary'>Create</Button>
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
