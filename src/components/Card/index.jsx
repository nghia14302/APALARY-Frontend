import { Card } from 'antd';

const CustomCard = ({ children, ...rest }) => {
	return <Card {...rest}>{children}</Card>;
};

export default CustomCard;
