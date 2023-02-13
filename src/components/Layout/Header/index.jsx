import { Avatar, Button, Dropdown, Image, Layout, Popover, Space } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';

import Logo from '../../../assets';
import { menuLogo } from '../style';
import dropDownItem from './DropdownItem';

const StyledHeader = (props) => {
	const { style, isDashBoard } = props;
	return (
		<Header style={style}>
			<div>{isDashBoard ? <img src={Logo} style={menuLogo} /> : null}</div>
			<div>
				<Dropdown menu={{ items: dropDownItem }} placement='bottomLeft'>
					<Avatar />
				</Dropdown>
			</div>
		</Header>
	);
};

export default StyledHeader;
