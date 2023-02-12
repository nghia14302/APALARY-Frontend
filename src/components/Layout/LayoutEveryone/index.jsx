import { useEffect, useState } from 'react';

import { Card, Layout, Menu } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';

import Logo from '../../../assets';
import { managerItems } from '../ManagerItems';
import { layoutContent, layoutHeader, menuLogo } from '../style';

import Sider from 'antd/es/layout/Sider';

const LayoutEveryone = (props) => {
	const { children } = props;
	const [link, setLink] = useState('/dashboard');
	const navigate = useNavigate();
	useEffect(() => {
		navigate(link);
	}, [link]);
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Layout
				className='site-layout'
				style={{
					height: '100vh',
				}}
			>
				<Header style={layoutHeader}></Header>
				<Content>{children}</Content>
			</Layout>
		</Layout>
	);
};

export default LayoutEveryone;
