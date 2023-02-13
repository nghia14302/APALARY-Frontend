import { Table, Row, Col } from 'antd';

import Box from '../Box';
import SearchBar from '../SearchBar';

export const CustomTable = ({ columns, onSearch, ...rest }) => {
	return (
		<Box direction='vertical'>
			<Row justify={'end'}>
				<Col>
					{onSearch && (
						<SearchBar placeholder='Search by name' enterButton onSearch={onSearch} />
					)}
				</Col>
			</Row>
			<Box>
				<Table columns={columns} {...rest} />;
			</Box>
		</Box>
	);
};

export default CustomTable;
