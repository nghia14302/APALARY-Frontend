import { Avatar, Button, Dropdown, Image, Layout, Popover, Space } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';

import Logo from '../../../assets';
import { usePersistedState } from '../../../utils/LocalStorage/usePersistedState';
import LocalStorageUtils from '../../../utils/LocalStorage/utils';
import { menuLogo } from '../style';
import dropDownItem from './DropdownItem';

import { StepBackwardOutlined } from '@ant-design/icons';

const StyledHeader = (props) => {
	const navigate = useNavigate();
	const [token] = usePersistedState('token');
	const { style, isDashBoard } = props;
	const logout = () => {
		LocalStorageUtils.removeItem('token');
		LocalStorageUtils.removeItem('role');
		return navigate('/');
	};
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
				{token && token !== '' ? (
					<Dropdown
						menu={{
							items: dropDownItem,
							onClick: logout,
						}}
						placement='bottomLeft'
					>
						<Avatar />
					</Dropdown>
				) : (
					<Button onClick={() => navigate('/login')}>Login</Button>
				)}
			</div>
		</Header>
	);
};

export default StyledHeader;
