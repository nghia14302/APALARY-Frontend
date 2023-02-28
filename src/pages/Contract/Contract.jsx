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
import dayjs from 'dayjs';

import data from './data.js';

import { PlusOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const { TextArea } = Input;

const Contract = () => {
	const { name, base, tax, signDate, startDate, endDate, description, type } = data[0];
	return (
		<>
			<Form
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 14 }}
				layout='horizontal'
				style={{ maxWidth: 800 }}
			>
				<Form.Item label='Name'>
					<Input value={name} />
				</Form.Item>

				<Form.Item label='Type Of Work' style={{ width: 600 }}>
					<Select value={type}>
						<Select.Option value='Full time'>Fulltime</Select.Option>
						<Select.Option value='Part time'>Parttime</Select.Option>
					</Select>
				</Form.Item>
				<Form.Item label='SignDate'>
					<DatePicker value={dayjs(signDate, 'YYYY-MM-DD')} />
				</Form.Item>
				<Form.Item label='Term'>
					<RangePicker
						value={[dayjs(startDate, 'YYYY-MM-DD'), dayjs(endDate, 'YYYY-MM-DD')]}
						style={{ width: 400 }}
					/>
				</Form.Item>

				<Form.Item label='Salary'>
					<Input value={base} readOnly />
				</Form.Item>
				<Form.Item label='Tax'>
					<Input value={tax} readOnly />
				</Form.Item>

				<Form.Item label='Upload' valuePropName='fileList'>
					<Upload listType='picture-card'>
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

export default () => <Contract />;
