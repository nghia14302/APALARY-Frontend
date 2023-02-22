import { Layout, Card, Image, Row, Col, Rate, Form } from 'antd';
import { FaMoneyBillWave } from 'react-icons/fa';
import { VscFeedback } from 'react-icons/vsc';
import { NavLink, Routes, Route } from 'react-router-dom';

import Box from '../../components/Box/index.jsx';
import FeedBacks from '../Feedback/data.js';
import Profile from '../Profile/Profile';
import ProData from '../Profile/data.js';

import { FileTextFilled, IdcardFilled, ProfileFilled, MailFilled } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const EmDashboard = () => {
	const { star } = FeedBacks[0];
	const { name, phone, number, username, password, gender, date } = ProData[0];
	return (
		<Box direction='vertical'>
			<Content
				style={{
					borderRadius: 20,
					background: '#F0F0F0',
				}}
			>
				<Image
					width='100%'
					height={250}
					style={{ borderRadius: 20 }}
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
					<Col span={10}>
						<Row>
							<Col span={2} offset={3}>
								<NavLink to='/application'>
									<Card
										hoverable
										bordered={true}
										style={{ background: '#F0F0F0', width: 120, height: 120 }}
									>
										<MailFilled style={{ fontSize: 50, marginLeft: 10 }} />
										Application
									</Card>
								</NavLink>
							</Col>
							<Col span={4} offset={4}>
								<NavLink to='/contract'>
									<Card
										hoverable
										bordered={true}
										style={{ background: '#F0F0F0', width: 120, height: 120 }}
									>
										<div style={{ marginLeft: 10 }}>
											<FileTextFilled
												style={{ fontSize: 50, marginLeft: 1 }}
											/>
											Contract
										</div>
									</Card>
								</NavLink>
							</Col>
							<Col span={2} offset={2}>
								<NavLink to='/salary'>
									<Card
										bordered={true}
										style={{ background: '#F0F0F0', width: 120, height: 120 }}
									>
										<div style={{ marginLeft: 10 }}>
											<FaMoneyBillWave
												style={{ fontSize: 50, marginBottom: -5 }}
											/>
											Salary
										</div>
									</Card>
								</NavLink>
							</Col>
						</Row>

						<Card
							title={<VscFeedback style={{ fontSize: 50, marginLeft: 240 }} />}
							style={{ marginTop: 10 }}
						>
							<p style={{ borderBottomStyle: 'solid' }}>
								<Rate
									disabled
									value={star}
									style={{
										marginLeft: 155,
										fontSize: 40,
									}}
								/>
							</p>
							<NavLink to='/feedback' style={{ fontSize: 20 }}>
								See More....
							</NavLink>
						</Card>
					</Col>
					<Col span={12}>
						<Card bordered={false}>
							<Card
								title='Personal Information'
								bordered={false}
								style={{
									border: '2px solid black',
									height: 310,
									textAlign: 'center',
								}}
							>
								<Form.Item label='Full Name'>{name}</Form.Item>
								<Form.Item label='Id'>{number}</Form.Item>
								<Form.Item label='UserName'>{username}</Form.Item>

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
