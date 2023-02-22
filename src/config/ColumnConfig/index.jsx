import { Space } from 'antd';
import { Link } from 'react-router-dom';

import { routeKey } from '../../components/Layout/ManagerItems';

export const applicantColumns = [
	{
		title: 'Name',
		dataIndex: 'name',
		sorter: true,
		render: (value, record) => <Link to={`${routeKey.applicants}/${record.id}`}>{value}</Link>,
	},
	{
		title: 'Email',
		dataIndex: 'email',
		sorter: true,
	},
	{
		title: 'Phone',
		dataIndex: 'phone',
		sorter: true,
	},
	{
		title: 'status',
		dataIndex: 'status',
		sorter: true,
	},
	{
		title: 'Department',
		dataIndex: 'department',
		sorter: true,
	},
	{
		title: 'Action',
		render: (_, record) => (
			<Space size='middle'>
				<Link to={`${routeKey.applicants}/${record.id}`}>Approve</Link>
				<Link to={`${routeKey.applicants}/${record.id}/edit`}>Delete</Link>
			</Space>
		),
	},
];

export const postColumns = [
	{
		title: 'Job title',
		dataIndex: 'title',
		sorter: true,
		render: (value, record) => <Link to={`${routeKey.posts}/${record.id}`}>{value}</Link>,
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
	showQuickJumper: true,
};
