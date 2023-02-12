import { Button, Col, Form, Input, Row } from 'antd';

import FacebookIcon from '../../../assets/homepage/facebook-logo.png';
import GmailIcon from '../../../assets/homepage/gmail-logo.png';
import InstagramIcon from '../../../assets/homepage/instagram-logo.png';
import TwitterIcon from '../../../assets/homepage/twitter-logo.png';
import { componentStyle, imgStyle } from './styles';

export default function Contact() {
	return (
		<Row justify='space-between' style={componentStyle}>
			<Col span={8}>
				<h3>Looking for jobs to brew your own magic potion? We can help you!</h3>
				<div>
					<img src={FacebookIcon} alt='facebook icon' style={imgStyle} />
					<span>gmail.com</span>
				</div>
				<div>
					<img src={GmailIcon} alt='facebook icon' style={imgStyle} />
					<span>gmail.com</span>
				</div>
				<div>
					<img src={TwitterIcon} alt='facebook icon' style={imgStyle} />
					<span>gmail.com</span>
				</div>
				<div>
					<img src={InstagramIcon} alt='facebook icon' style={imgStyle} />
					<span>gmail.com</span>
				</div>
			</Col>
			<Col span={14}>
				<Form
					labelCol={{
						span: 4,
					}}
					wrapperCol={{
						span: 14,
					}}
					layout='horizontal'
					size={{
						size: 'large',
					}}
					onValuesChange={() => 1}
					style={{
						maxWidth: 600,
					}}
				>
					<Form.Item label='Input'>
						<Input />
					</Form.Item>
					<Form.Item label='Input'>
						<Input />
					</Form.Item>
					<Form.Item label='Input'>
						<Input />
					</Form.Item>
					<Form.Item label='Button'>
						<Button>Submit</Button>
					</Form.Item>
				</Form>
			</Col>
		</Row>
	);
}
