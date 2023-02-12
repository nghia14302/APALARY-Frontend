import bgDashboard from '../../../assets/homepage/bg-homepage.jpg';
import themeConfig from '../../../utils/Theme';

export const componentStyle = {
	backgroundImage: `url(${bgDashboard})`,
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
	color: 'white',
	background: themeConfig.token.colorPrimary,
	padding: '5px 10px',
	fontSize: '28px',
	fontWeight: 'bold',
	height: 'auto',
	'&:hover': {
		color: themeConfig.token.colorPrimary,
		background: 'white',
	},
};
