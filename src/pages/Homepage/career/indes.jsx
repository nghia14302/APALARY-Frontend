import { Col, Row, Space, Table } from 'antd';

import careerImg from '../../../assets/homepage/career-bg.jpg';
import { buttonStyle, componentStyle, imgStyle, titleStyle } from './styles';

const { Column } = Table;

const data = [
	{
		id: '1',
		key: '1',
		title: 'Nhân viên văn phòng',
		maxEmployee: 32,
		description: 'New York No. 1 Lake Park',
		baseSalary: '$3000',
	},
	{
		id: '2',
		key: '2',
		title: 'Nhân viên văn phòng',
		maxEmployee: 42,
		description: 'London No. 1 Lake Park',
		baseSalary: '$3000',
	},
	{
		id: '3',
		key: '3',
		title: 'Nhân viên văn phòng',
		maxEmployee: 32,
		description: 'Sydney No. 1 Lake Park',
		baseSalary: '$3000',
	},
	{
		id: '4',
		key: '4',
		title: 'Nhân viên văn phòng',
		maxEmployee: 32,
		description: 'New York No. 1 Lake Park',
		baseSalary: '$3000',
	},
	{
		id: '5',
		key: '5',
		title: 'Nhân viên văn phòng',
		maxEmployee: 42,
		description: 'London No. 1 Lake Park',
		baseSalary: '$3000',
	},
	{
		id: '6',
		key: '6',
		title: 'Nhân viên văn phòng',
		maxEmployee: 32,
		description: 'Sydney No. 1 Lake Park',
		baseSalary: '$3000',
	},
	{
		id: '7',
		key: '7',
		title: 'Nhân viên văn phòng',
		maxEmployee: 32,
		description: 'New York No. 1 Lake Park',
		baseSalary: '$3000',
	},
	{
		id: '8',
		key: '8',
		title: 'Nhân viên văn phòng',
		maxEmployee: 42,
		description: 'London No. 1 Lake Park',
		baseSalary: '$3000',
	},
	{
		id: '9',
		key: '9',
		title: 'Nhân viên văn phòng',
		maxEmployee: 32,
		description: 'Sydney No. 1 Lake Park',
		baseSalary: '$3000',
	},
];

export default function Career() {
	return (
		<Row style={componentStyle} justify='space-between'>
			<Col span={8}>
				<img src={careerImg} alt='career list' style={imgStyle} />
			</Col>
			<Col span={15}>
				<h3 style={titleStyle}>Career</h3>
				<Table dataSource={data} pagination={{ pageSize: 7 }}>
					<Column title='Title' dataIndex='title' key='title' />
					<Column title='Description' dataIndex='description' key='description' />
					<Column title='Quantity' dataIndex='maxEmployee' key='maxEmployee' />
					<Column title='Base Salary' dataIndex='baseSalary' key='baseSalary' />
					<Column
						title='Action'
						key='action'
						render={({ id }) => (
							<Space size='middle'>
								<a style={buttonStyle}>Detail</a>
								<a style={buttonStyle}>Apply</a>
							</Space>
						)}
					/>
				</Table>
			</Col>
		</Row>
	);
}
