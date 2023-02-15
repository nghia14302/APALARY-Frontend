import { Card } from 'antd';

import { StyledCard } from './styled';

const CustomCard = ({ children, ...rest }) => {
	return <StyledCard {...rest}>{children}</StyledCard>;
};

export default CustomCard;
