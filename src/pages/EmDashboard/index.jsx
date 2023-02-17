import { Layout, Card, Image, Row, Col } from 'antd';
import { VscFeedback } from 'react-icons/vsc';

import { FileTextFilled, IdcardFilled, ProfileFilled, MailFilled } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const EmDashboard = () => {
	return (
		<Layout className='layout'>
			<Header style={{ background: '#F0F0F0', height: 10 }}></Header>
			<Content
				style={{
					background: '#F0F0F0',
				}}
			>
				<Card
					bordered={true}
					style={{
						width: 'auto',
						borderRadius: 5,
						marginLeft: 20,
						marginRight: 20,
					}}
				>
					<Image
						style={{ width: '100%', height: 250 }}
						src='https://www.umassalumni.com/s/1640/images/gid2/editor/alumni_association/campus_partners/architecture/dbexterior.jpg'
					></Image>
				</Card>
			</Content>
			<Footer
				style={{
					background: '#F0F0F0',
				}}
			>
				<Row gutter={18}>
					<Col span={12}>
						<Row>
							<Col span={4.5} offset={6}>
								<Card bordered={true} style={{ background: '#F0F0F0' }}>
									<MailFilled style={{ fontSize: 50, marginLeft: 10 }} />
									<p>Application</p>
								</Card>
							</Col>
							<Col span={6.5} offset={2}>
								<Card bordered={true} style={{ background: '#F0F0F0' }}>
									<FileTextFilled style={{ fontSize: 50 }} />
									<p>Contract</p>
								</Card>
							</Col>
						</Row>
						<Card cover={<VscFeedback style={{ fontSize: 35 }} />}></Card>
					</Col>
					<Col span={12}>
						<Card>abc</Card>
					</Col>
				</Row>
			</Footer>
		</Layout>
	);
};
export default EmDashboard;
