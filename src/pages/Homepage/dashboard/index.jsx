import { useState } from 'react';

import { Button, Col, Row } from 'antd';

import calendar from '../../../assets/homepage/logo-dashboard/calendar-icon.png';
import character from '../../../assets/homepage/logo-dashboard/character.png';
import chart from '../../../assets/homepage/logo-dashboard/chart-icon.png';
import money from '../../../assets/homepage/logo-dashboard/money-icon.png';
import shape from '../../../assets/homepage/logo-dashboard/shape.png';
import target from '../../../assets/homepage/logo-dashboard/target-icon.png';
import themeConfig from '../../../utils/Theme';
import {
	buttonStyle,
	componentStyle,
	contentStyle,
	LogoDashboard,
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
				<LogoDashboard>
					<img src={shape} alt='shape' className='shape' />
					<img src={character} alt='character' className='character' />
					<img src={calendar} alt='calendar' className='calendar' />
					<img src={money} alt='money' className='money' />
					<img src={chart} alt='chart' className='chart' />
					<img src={target} alt='target' className='target' />
				</LogoDashboard>
			</Col>
		</Row>
	);
}
