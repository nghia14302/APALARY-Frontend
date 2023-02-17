import React, { useState } from 'react';

import {
	Form,
	Input,
	Button,
	Radio,
	Select,
	Cascader,
	DatePicker,
	InputNumber,
	TreeSelect,
	Switch,
	Checkbox,
	Upload,
} from 'antd';

import data from './data.js';

import { PlusOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const { TextArea } = Input;

const FormDisabledDemo = () => {
	const { name, base, tax, signDate, startDate, endDate, description, type } = data[0];
	return (
		<>
			<Form
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 14 }}
				layout='horizontal'
				style={{ maxWidth: 600 }}
			>
				<Form.Item label='Name'>
					<Input value={name} />
				</Form.Item>

				<Form.Item label='Select'>
					<Select value={type}>
						<Select.Option value='Full time'>Fulltime</Select.Option>
						<Select.Option value='Part time'>Parttime</Select.Option>
					</Select>
				</Form.Item>
				<Form.Item label='DatePicker'>
					<DatePicker />
				</Form.Item>
				<Form.Item label='RangePicker'>
					<RangePicker />
				</Form.Item>

				<Form.Item label='Salary'>
					<Input value={base} />
				</Form.Item>
				<Form.Item label='Tax'>
					<Input value={tax} />
				</Form.Item>

				<Form.Item label='Upload' valuePropName='fileList'>
					<Upload action='/upload.do' listType='picture-card'>
						<div>
							<PlusOutlined />
							<div style={{ marginTop: 8 }}>Upload</div>
						</div>
					</Upload>
				</Form.Item>
			</Form>
		</>
	);
};

export default () => <FormDisabledDemo />;
