import React from 'react';

import { Col, Row } from 'antd';

import hero from '../../assets/homepage/hero.png';

export default function Homepage() {
	return (
		<div>
			<Row justify='space-between' align='bottom'>
				<Col span={6}>
					<h3>
						New <p>offer</p> are waiting for you
					</h3>
					<p>
						You are looking for a job with high salary and stability. A professional and
						creative working environment.
					</p>
					<button>Let`s go!</button>
				</Col>
				<Col span={6}>
					<img src={hero} alt='decoration' />
				</Col>
			</Row>
		</div>
	);
}
