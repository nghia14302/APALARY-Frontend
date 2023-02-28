import { Table, Row, Col, Button, Tabs, Space } from 'antd';
import { Link } from 'react-router-dom';

import { tabStatusConfig } from '../../config/TabsConfig';
import Box from '../Box';
import { routeKey } from '../Layout/ManagerItems';
import SearchBar from '../SearchBar';

import { PlusOutlined } from '@ant-design/icons';

export const CustomTable = ({
	addNewButton,
	columns,
	onSearch,
	activeKey,
	onTabChange,
	children,
	...rest
}) => {
	return (
		<Box direction='vertical' width='100%'>
			<Row justify={'space-between'} gutter={20}>
				<Col>
					<Row justify={'center'} align='middle'>
						<Col>
							{onTabChange && (
								<Tabs
									defaultActiveKey='PROCESSING'
									activeKey={activeKey}
									onChange={onTabChange}
									items={tabStatusConfig.map((item) => item)}
								/>
							)}
						</Col>
						<Col>
							{addNewButton && (
								<Link to={routeKey.postsCreate}>
									<Button icon={<PlusOutlined />} type='primary'>
										Add new
									</Button>
								</Link>
							)}
						</Col>
					</Row>
				</Col>
				<Col>
					{onSearch && (
						<SearchBar placeholder='Search by name' enterButton onSearch={onSearch} />
					)}
				</Col>
			</Row>
			<Row>
				<Table columns={columns} {...rest}>
					{children}
				</Table>
			</Row>
		</Box>
	);
};

export default CustomTable;
