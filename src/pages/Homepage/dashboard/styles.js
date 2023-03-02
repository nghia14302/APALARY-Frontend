import styled, { keyframes } from 'styled-components';

import bgDashboard from '../../../assets/homepage/bg-homepage.jpg';
import themeConfig from '../../../utils/Theme';

const dance = keyframes`
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
`;

export const componentStyle = {
	backgroundImage: `url(${bgDashboard})`,
	height: `calc(100vh - 64px)`,
	minHeight: '500px',
	padding: '0 100px',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
};

export const titleStyle = {
	fontSize: '48px',
	lineHeight: '60px',
};
export const spanTitleStyle = {
	color: themeConfig.token.colorPrimary,
};

export const contentStyle = {
	fontSize: '28px',
};

export const buttonStyle = {
	margin: '1rem 0',
	color: 'white',
	background: themeConfig.token.colorPrimary,
	padding: '5px 10px 7px',
	fontSize: '28px',
	fontWeight: 'bold',
	height: 'auto',
	border: `2px solid ${themeConfig.token.colorPrimary}`,
	borderRadius: '10px',
};

export const LogoDashboard = styled.div`
	position: relative;
	img {
		top: 0;
		left: 0;
		width: 100%;
	}
	.character {
		position: absolute;
		animation: ${dance} 3s linear infinite alternate;
	}
	.calendar {
		position: absolute;
		animation: ${dance} 1.8s linear infinite alternate;
	}
	.money {
		position: absolute;
		animation: ${dance} 1.8s linear infinite alternate;
		animation-delay: 300ms;
	}
	.chart {
		position: absolute;
		animation: ${dance} 1.8s linear infinite alternate;
		animation-delay: 600ms;
	}
	.target {
		position: absolute;
		animation: ${dance} 1.8s linear infinite alternate;
		animation-delay: 900ms;
	}
`;
