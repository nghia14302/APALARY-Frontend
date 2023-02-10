import { useEffect, useState } from 'react';

import { Card, Layout, Menu } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets';
import { managerItems } from './ManagerItems';
import { layoutContent, layoutHeader, menuLogo } from './style';

import Sider from 'antd/es/layout/Sider';

const LayoutManager = (props) => {
	const { children } = props;
	const [link, setLink] = useState('/dashboard');
	const navigate = useNavigate();
	useEffect(() => {
		navigate(link);
	}, [link]);
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider>
				<div style={menuLogo}>
					<img src={Logo} alt='logo' />
				</div>
				<Menu
					theme='dark'
					defaultSelectedKeys={['/dashboard']}
					onClick={(item) => setLink(item.key)}
					mode='inline'
					items={managerItems}
				></Menu>
			</Sider>
			<Layout
				className='site-layout'
				style={{
					height: '100vh',
				}}
			>
				<Header style={layoutHeader}></Header>
				<Content style={layoutContent}>
					<Card bordered>{children}</Card>
				</Content>
			</Layout>
		</Layout>
	);
};

export default LayoutManager;
