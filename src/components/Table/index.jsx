import { Table } from 'antd';

const CustomTable = ({ data, columns, ...rest }) => {
	return <Table columns={columns} pagination={false} {...rest} />;
};

export default CustomTable;
