import { Typography } from 'antd';

const { Text } = Typography;

export const postColumns = [
	{
		title: 'Job title',
		dataIndex: 'title',
		sorter: true,
		width: '20%',
	},
	{
		title: 'Description',
		dataIndex: 'description',
		ellipsis: true,
	},
	{
		title: 'Salary',
		dataIndex: 'baseSalary',
	},
	{
		title: 'Max Employee',
		dataIndex: 'maxEmployee',
	},
	{
		title: 'Status',
		dataIndex: 'status',
	},
];
export const paginationConfig = {
	showSizeChanger: true,
	showQuickJump: true,
};
