import themeConfig from '../../../utils/Theme';

export const componentStyle = {
	padding: '100px 50px',
};
export const titleStyle = {
	fontSize: '30px',
	textAlign: 'center',
	marginTop: 0,
};
export const imgStyle = {
	width: '100%',
	position: 'absolute',
	top: '50%',
	transform: 'translateY(-50%)',
};
export const buttonStyle = {
	color: themeConfig.token.colorPrimary,
};
export const textOverflow = {
	'-webkit-line-clamp': 1,
	'-webkit-box-orient': 'vertical',
	overflow: 'hidden',
	display: '-webkit-box',
};
