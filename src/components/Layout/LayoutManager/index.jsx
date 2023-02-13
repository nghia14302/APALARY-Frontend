import { useEffect, useState } from 'react';

import { Card, Carousel, Layout, Menu } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';

import Logo from '../../../assets';
import StyledHeader from '../Header';
import { managerItems } from '../ManagerItems';
import { layoutContent, layoutHeader, menuLogo } from '../style';

import Sider from 'antd/es/layout/Sider';

const LayoutManager = (props) => {
	const { children } = props;
	const [link, setLink] = useState('/dashboard');
	const navigate = useNavigate();
	useEffect(() => {
		navigate(link);
	}, [link]);
	return (
		<Layout>
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
					minHeight: '100vh',
				}}
			>
				<StyledHeader hasLogo={false} style={layoutHeader}></StyledHeader>
				<Content style={layoutContent}>
					<Card bordered>{children}</Card>
				</Content>
			</Layout>
		</Layout>
	);
};

export default LayoutManager;
