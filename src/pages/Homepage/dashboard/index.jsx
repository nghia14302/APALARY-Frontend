import React from 'react';

import { Button, Col, Row } from 'antd';

import hero from '../../../assets/homepage/hero.png';
import { buttonStyle, componentStyle, contentStyle, spanTitleStyle, titleStyle } from './styles';

export default function DashboardComponent() {
	return (
		<Row justify='space-between' align='middle' style={componentStyle}>
			<Col span={10} align='left'>
				<h2 style={titleStyle}>
					New <span style={spanTitleStyle}>offers</span> are waiting for you
				</h2>
				<p style={contentStyle}>
					You are looking for a job with high salary and stability. A professional and
					creative working environment.
				</p>
				<Button style={buttonStyle}>Let`s go!</Button>
			</Col>
			<Col span={12}>
				<img src={hero} alt='decoration' />
			</Col>
		</Row>
	);
}
