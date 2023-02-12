import bgDashboard from '../../../assets/homepage/bg-homepage.jpg';
import themeConfig from '../../../utils/Theme';

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
