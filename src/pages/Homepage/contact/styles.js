import themeConfig from '../../../utils/Theme';

export const componentStyle = {
	padding: '50px 100px',
	position: 'relative',
	alignItems: 'center',
};
export const titleStyle = {
	fontSize: '30px',
	marginTop: 0,
};
export const imgStyle = {
	width: '40px',
};

export const centerStyle = {
	position: 'absolute',
	top: '50%',
};
export const formStyle = {
	border: `3px dashed ${themeConfig.token.colorPrimary}`,
	padding: '50px',
	borderRadius: '20px',
	textAlign: 'center',
};
export const buttonStyle = {
	margin: '0 auto',
	color: 'white',
	background: themeConfig.token.colorPrimary,
	padding: '5px 20px',
	fontSize: '18px',
	fontWeight: '600',
	height: 'auto',
	border: `2px solid ${themeConfig.token.colorPrimary}`,
	borderRadius: '10px',
};

export const mediaStyle = {
	display: 'flex',
	alignItems: 'center',
	margin: '1rem 0',
	color: 'black',
};
export const tagStyle = {
	fontSize: '15px',
	padding: '5px',
	width: '65px',
	textAlign: 'center',
};
