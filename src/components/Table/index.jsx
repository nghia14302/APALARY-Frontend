import { Table, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

import Box from '../Box';
import { routeKey } from '../Layout/ManagerItems';
import SearchBar from '../SearchBar';

import { PlusOutlined } from '@ant-design/icons';

export const CustomTable = ({ addNewButton, columns, onSearch, ...rest }) => {
	return (
		<Box direction='vertical'>
			<Row justify={'space-between'}>
				<Col>
					{addNewButton && (
						<Link to={routeKey.postsCreate}>
							<Button icon={<PlusOutlined />} type='primary'>
								Add new
							</Button>
						</Link>
					)}
				</Col>
				<Col>
					{onSearch && (
						<SearchBar placeholder='Search by name' enterButton onSearch={onSearch} />
					)}
				</Col>
			</Row>
			<Row>
				<Table columns={columns} {...rest} />
			</Row>
		</Box>
	);
};

export default CustomTable;
