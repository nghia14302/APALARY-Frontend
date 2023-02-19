import { useState } from 'react';

import { Button, Col, Form, Input, Row, Tag } from 'antd';

import FacebookIcon from '../../../assets/homepage/facebook-logo.png';
import GmailIcon from '../../../assets/homepage/gmail-logo.png';
import themeConfig from '../../../utils/Theme';
import InstagramIcon from './../../../assets/homepage/instagram-logo.png';
import TwitterIcon from './../../../assets/homepage/twitter-logo.png';
import {
	buttonStyle,
	componentStyle,
	formStyle,
	imgStyle,
	mediaStyle,
	tagStyle,
	titleStyle,
} from './styles';

const { TextArea } = Input;

export default function Contact() {
	const [onHover, setOnHover] = useState(false);

	const buttonHover = {
		...buttonStyle,
		background: themeConfig.token.colorPrimary,
		color: 'white',
	};
	const buttonBlur = {
		...buttonStyle,
		color: themeConfig.token.colorPrimary,
		background: 'white',
	};

	return (
		<Row justify='space-between' style={componentStyle}>
			<Col span={8}>
				<h3 style={titleStyle}>
					Looking for jobs to brew your own magic potion? We can help you!
				</h3>
				<Row>
					<Col span={12}>
						<a style={mediaStyle} href='https://fb.com/profile'>
							<img src={FacebookIcon} alt='facebook icon' style={imgStyle} />
							<span style={{ marginLeft: '10px' }}>fb.com</span>
						</a>
					</Col>
					<Col span={12}>
						<a style={mediaStyle} href='https://www.gmail.com'>
							<img src={GmailIcon} alt='facebook icon' style={imgStyle} />
							<span style={{ marginLeft: '10px' }}>apalary@gmail.com</span>
						</a>
					</Col>
					<Col span={12}>
						<a style={mediaStyle} href='https://www.twitter.com'>
							<img src={TwitterIcon} alt='facebook icon' style={imgStyle} />
							<span style={{ marginLeft: '10px' }}>www.twitter.com</span>
						</a>
					</Col>
					<Col span={12}>
						<a style={mediaStyle} href='https://www.instagram.com'>
							<img src={InstagramIcon} alt='facebook icon' style={imgStyle} />
							<span style={{ marginLeft: '10px' }}>www.instagram.com</span>
						</a>
					</Col>
				</Row>
			</Col>
			<Col span={11}>
				<Form
					layout='horizontal'
					size={{
						size: 'large',
					}}
					onValuesChange={() => alert('Values')}
					style={formStyle}
				>
					<h3 style={titleStyle}>Contact Us</h3>
					<Form.Item>
						<Input
							prefix={
								<Tag color={themeConfig.token.colorPrimary} style={tagStyle}>
									Name
								</Tag>
							}
							placeholder='Nguyen Van A'
						/>
					</Form.Item>
					<Form.Item>
						<Input
							prefix={
								<Tag color={themeConfig.token.colorPrimary} style={tagStyle}>
									Email
								</Tag>
							}
							placeholder='example@gmail.com'
							type='email'
						/>
					</Form.Item>
					<Form.Item>
						<Input
							prefix={
								<Tag color={themeConfig.token.colorPrimary} style={tagStyle}>
									Subject
								</Tag>
							}
							placeholder='Ask a about company'
						/>
					</Form.Item>
					<Form.Item
						label={
							<p color={themeConfig.token.colorPrimary} style={tagStyle}>
								Message
							</p>
						}
					>
						<TextArea placeholder='Today I feel so good' />
					</Form.Item>
					<Button
						style={onHover ? buttonHover : buttonBlur}
						onMouseEnter={() => setOnHover(true)}
						onMouseLeave={() => setOnHover(false)}
					>
						Submit
					</Button>
				</Form>
			</Col>
		</Row>
	);
}
