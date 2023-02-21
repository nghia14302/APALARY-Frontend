import { Avatar, Button, Dropdown, Image, Layout, Popover, Space } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';

import Logo from '../../../assets';
import { menuLogo } from '../style';
import dropDownItem from './DropdownItem';

import { StepBackwardOutlined } from '@ant-design/icons';

const StyledHeader = (props) => {
	const navigate = useNavigate();
	const { style, isDashBoard } = props;
	return (
		<Header style={style}>
			<div>
				{isDashBoard ? (
					<img src={Logo} style={menuLogo} />
				) : (
					<Button onClick={() => navigate(-1)}>
						<StepBackwardOutlined />
						Back
					</Button>
				)}
			</div>
			<div>
				<Dropdown menu={{ items: dropDownItem }} placement='bottomLeft'>
					<Avatar />
				</Dropdown>
			</div>
		</Header>
	);
};

export default StyledHeader;
