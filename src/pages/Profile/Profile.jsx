import { useState } from 'react';

import { Button, DatePicker, Form, Input, Radio, Card } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

import Profile from './data';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const FormDisabledDemo = () => {
	const [componentDisabled, setComponentDisabled] = useState(true);
	const onFormLayoutChange = ({ disabled }) => {
		setComponentDisabled(disabled);
	};

	const { name, phone, number, username, password, gender, date } = Profile[0];
	return (
		<Card
			title='Personal Information'
			bordered={false}
			style={{
				width: 700,
				marginLeft: 450,
			}}
		>
			<Form
				labelCol={{
					span: 7,
				}}
				wrapperCol={{
					span: 14,
				}}
				layout='horizontal'
				onValuesChange={onFormLayoutChange}
				disabled={componentDisabled}
				style={{
					maxWidth: 600,
					marginBottom: 20,
				}}
			>
				<Form.Item label='Full Name' style={{ marginTop: 10 }}>
					<Input value={name}></Input>
				</Form.Item>
				<Form.Item label='Gender'>
					<Radio.Group value={gender}>
						<Radio value='Female'> Female </Radio>
						<Radio value='Male'> Male </Radio>
					</Radio.Group>
				</Form.Item>
				<Form.Item label='Date'>
					<DatePicker defaultValue={dayjs(date, 'YYYY-MM-DD')} />
				</Form.Item>
				<Form.Item label='Phone' style={{ marginTop: 10 }}>
					<Input value={phone}></Input>
				</Form.Item>
				<Form.Item label='ID' style={{ marginTop: 10 }}>
					<Input value={number}></Input>
				</Form.Item>
				<Form.Item label='UserName' style={{ marginTop: 10 }}>
					<Input value={username}></Input>
				</Form.Item>
				<Form.Item label='Password' style={{ marginTop: 10 }}>
					<Input value={password}></Input>
				</Form.Item>

				<Button
					type='dashed'
					style={{
						marginLeft: 50,
					}}
					onClick={(e) => setComponentDisabled(!e.target.checked)}
				>
					Update
				</Button>
			</Form>

			<Button type='primary' onClick={() => setComponentDisabled(!componentDisabled)}>
				{componentDisabled ? 'Edit' : '  Cancel'}
			</Button>
		</Card>
	);
};
export default FormDisabledDemo;
