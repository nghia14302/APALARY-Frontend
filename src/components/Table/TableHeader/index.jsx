import { Row, Col } from 'antd';

import SearchBar from '../../SearchBar';

export const TableHeader = ({ onSearch }) => {
	return (
		<Row justify='end'>
			<Col>
				<SearchBar placeholder='Search by name' enterButton onSearch={onSearch} />
			</Col>
		</Row>
	);
};
export default TableHeader;
