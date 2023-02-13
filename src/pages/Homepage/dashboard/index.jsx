import { useState } from 'react';

import { Button, Col, Row } from 'antd';

import hero from '../../../assets/homepage/hero.png';
import themeConfig from '../../../utils/Theme';
import {
	buttonStyle,
	componentStyle,
	contentStyle,
	Image,
	spanTitleStyle,
	titleStyle,
} from './styles';

export default function Dashboard({ scrollFunc }) {
	const [onHover, setOnHover] = useState(false);

	const buttonHover = {
		...buttonStyle,
		color: themeConfig.token.colorPrimary,
		background: 'white',
	};
	const buttonBlur = {
		...buttonStyle,
		background: themeConfig.token.colorPrimary,
		color: 'white',
	};

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
				{/* {onClick && <Navigate to={<Environment />} />} */}
				<Button
					style={onHover ? buttonHover : buttonBlur}
					onMouseEnter={() => setOnHover(true)}
					onMouseLeave={() => setOnHover(false)}
					onClick={scrollFunc}
				>
					Let`s go!
				</Button>
			</Col>
			<Col span={12} style={{ textAlign: 'end' }}>
				<Image src={hero} alt='decoration' />
			</Col>
		</Row>
	);
}
