import { useEffect, useState } from 'react';

import { Layout, Card, Image, Row, Col, Rate, Form } from 'antd';
import { FaMoneyBillWave } from 'react-icons/fa';
import { VscFeedback } from 'react-icons/vsc';
import { NavLink, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Box from '../../components/Box/index.jsx';
import employeeAPI from '../../utils/Apis/employeeAPI/index.js';
import FeedBacks from '../Feedback/data.js';
import Profile from '../Profile/Profile';

// import ProData from '../Profile/data.js';
import { FileTextFilled, IdcardFilled, ProfileFilled, MailFilled } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const EmDashboard = () => {
	const navigate = useNavigate();
	const [text, setText] = useState({
		phone: '',
		name: '',
		id: '',
		username: '',
		password: '',
		dateOfBirth: '',
		gender: '',
	});
	const sumStar = () => {
		let sum = 0;
		FeedBacks.forEach((todo) => (sum = sum + todo.star));
		return sum / FeedBacks.length;
	};
	// const { name, phone, number, username, password, gender, date } = ProData[0];
	useEffect(() => {
		employeeAPI
			.get()
			.then((res) => setText(res.data))
			.catch(() => navigate('/'));
	}, []);
	return (
		<Box direction='vertical'>
			<Content
				style={{
					background: '#F0F0F0',
				}}
			>
				<Image
					width='100%'
					height={250}
					src='https://www.umassalumni.com/s/1640/images/gid2/editor/alumni_association/campus_partners/architecture/dbexterior.jpg'
				></Image>
			</Content>
			<Footer
				style={{
					background: '#F0F0F0',
					width: '100%',
				}}
			>
				<Row gutter={18}>
					<Col span={12}>
						<Row>
							<Col span={8}>
								<NavLink to='/application'>
									<Card
										hoverable
										bordered={true}
										style={{
											background: '#F0F0F0',
											width: '99%',
											height: 120,
										}}
									>
										<MailFilled style={{ fontSize: 50, marginLeft: 13 }} />
										Application
									</Card>
								</NavLink>
							</Col>
							<Col span={8}>
								<NavLink to='/contract'>
									<Card
										hoverable
										bordered={true}
										style={{
											background: '#F0F0F0',
											width: '99%',
											height: 120,
										}}
									>
										<div style={{ marginLeft: 10 }}>
											<FileTextFilled
												style={{ fontSize: 50, marginLeft: 4 }}
											/>
											Contract
										</div>
									</Card>
								</NavLink>
							</Col>
							<Col span={8}>
								<NavLink to='/salary'>
									<Card
										hoverable
										style={{
											background: '#F0F0F0',
											width: '99%',
											height: 120,
										}}
									>
										<div style={{ marginLeft: 20 }}>
											<FaMoneyBillWave
												style={{
													fontSize: 50,
													marginLeft: -7,
													marginBottom: -5,
												}}
											/>
											Salary
										</div>
									</Card>
								</NavLink>
							</Col>
						</Row>

						<Card
							title={<VscFeedback style={{ fontSize: 50, marginLeft: 150 }} />}
							style={{ marginTop: 10 }}
						>
							<p style={{ borderBottomStyle: 'solid' }}>
								<Rate
									disabled
									allowHalf
									value={sumStar()}
									style={{
										fontSize: 40,
									}}
								/>
							</p>
							<NavLink to='/feedback'>See More....</NavLink>
						</Card>
					</Col>
					<Col span={12}>
						<Card bordered={false}>
							<Card
								title='Personal Information'
								bordered={false}
								style={{
									border: '2px solid black',
									height: 303,
									textAlign: 'center',
								}}
							>
								<Form.Item label='Full Name'>{text.name}</Form.Item>
								<Form.Item label='Id'>{text.id}</Form.Item>
								<Form.Item label='UserName'>{text.username}</Form.Item>

								<NavLink to='/profile'>More</NavLink>
							</Card>
						</Card>
					</Col>
				</Row>
			</Footer>
		</Box>
	);
};
export default EmDashboard;
