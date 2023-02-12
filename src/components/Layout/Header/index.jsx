import { Avatar, Image, Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';

import Logo from '../../../assets';
import { menuLogo } from '../style';

const StyledHeader = (props) => {
	const { style, isDashBoard } = props;
	return (
		<Header style={style}>
			{isDashBoard ? <Image src={Logo} style={menuLogo} /> : null}
			<div>
				<Avatar />
			</div>
		</Header>
	);
};

export default StyledHeader;
