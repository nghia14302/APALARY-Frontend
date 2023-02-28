import { useEffect, useState } from 'react';

import { Button, DatePicker, Form, Input, Radio, Card } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { useNavigate } from 'react-router-dom';

import employeeAPI from '../../utils/Apis/employeeAPI';

// import Profile from './data';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const FormDisabledDemo = () => {
	const navigate = useNavigate();
	const [componentDisabled, setComponentDisabled] = useState(true);
	const [text, setText] = useState({
		phone: '',
		name: '',
		id: '',
		username: '',
		password: '',
		dateOfBirth: '',
		gender: '',
	});
	const onFormLayoutChange = ({ disabled }) => {
		setComponentDisabled(disabled);
	};

	// const { name, phone, number, username, password, gender, date } = Profile[0];

	useEffect(() => {
		employeeAPI
			.get()
			.then((res) => setText(res.data))
			.catch(() => navigate('/'));
	}, []);
	return (
		<Card
			title='Personal Information'
			bordered={false}
			style={{
				width: 700,
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
					<Input
						value={text.name}
						onChange={(e) => setText({ ...text, name: e.target.value })}
					/>
				</Form.Item>
				<Form.Item label='Gender'>
					<Radio.Group
						value={0}
						onChange={(e) => setText({ ...text, gender: e.target.value })}
					>
						<Radio value={0}> Male </Radio>
						<Radio value={1}> Female </Radio>
						<Radio value={2}> Other </Radio>
					</Radio.Group>
				</Form.Item>
				<Form.Item label='Date'>
					<DatePicker value={dayjs(text.dateOfBirth, 'YYYY-MM-DD')} />
				</Form.Item>
				<Form.Item label='Phone' style={{ marginTop: 10 }}>
					<Input
						value={text.phone}
						onChange={(e) => setText({ ...text, phone: e.target.value })}
					/>
				</Form.Item>
				<Form.Item label='ID' style={{ marginTop: 10 }}>
					<Input
						value={text.id}
						onChange={(e) => setText({ ...text, number: e.target.value })}
					></Input>
				</Form.Item>
				<Form.Item label='UserName' style={{ marginTop: 10 }}>
					<Input
						value={text.username}
						onChange={(e) => setText({ ...text, username: e.target.value })}
					></Input>
				</Form.Item>

				<Button
					type='dashed'
					style={{
						marginLeft: 275,
					}}
					onClick={(e) => setComponentDisabled(!e.target.checked)}
				>
					Update
				</Button>
			</Form>

			<Button
				type='primary'
				style={{ marginLeft: 286 }}
				onClick={() => setComponentDisabled(!componentDisabled)}
			>
				{componentDisabled ? 'Edit' : '  Cancel'}
			</Button>
		</Card>
	);
};
export default FormDisabledDemo;
