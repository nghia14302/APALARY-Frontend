import { StyledBox } from './style';

const Box = ({ children, className, ...rest }) => {
	return (
		<StyledBox className={className} {...rest}>
			{children}
		</StyledBox>
	);
};

export default Box;
