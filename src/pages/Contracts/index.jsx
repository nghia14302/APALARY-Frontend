import React from 'react';

import { Card, Tabs, Table } from 'antd';

const onChange = (key) => {
	console.log(key);
};
const data = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
		startDate: '2002-10-10',
		endDate: '2007-10-10',
		description: '',
		status: 0,
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
		startDate: '2002-10-10',
		endDate: '2007-10-10',
		description: '',
		status: 0,
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sydney No. 1 Lake Park',
		startDate: '2002-10-10',
		endDate: '2007-10-10',
		description: '',
		status: 1,
	},
	{
		key: '4',
		name: 'Joe Black',
		age: 32,
		address: 'Sydney No. 1 Lake Park',
		startDate: '2002-10-10',
		endDate: '2007-10-10',
		description: '',
		status: 1,
	},
	{
		key: '5',
		name: 'Joe Black',
		age: 32,
		address: 'Sydney No. 1 Lake Park',
		startDate: '2002-10-10',
		endDate: '2007-10-10',
		description: '',
		status: 1,
	},
	{
		key: '6',
		name: 'Joe Black',
		age: 32,
		address: 'Sydney No. 1 Lake Park',
		startDate: '2002-10-10',
		endDate: '2007-10-10',
		description: '',
		status: 1,
	},
	{
		key: '7',
		name: 'Joe Black',
		age: 32,
		address: 'Sydney No. 1 Lake Park',
		startDate: '2002-10-10',
		endDate: '2007-10-10',
		description: '',
		status: 1,
	},
	{
		key: '8',
		name: 'Joe Black',
		age: 32,
		address: 'Sydney No. 1 Lake Park',
		startDate: '2002-10-10',
		endDate: '2007-10-10',
		description: '',
		status: 1,
	},
	{
		key: '9',
		name: 'Joe Black',
		age: 32,
		address: 'Sydney No. 1 Lake Park',
		startDate: '2002-10-10',
		endDate: '2007-10-10',
		description: '',
		status: 1,
	},
	{
		key: '11',
		name: 'Joe Black',
		age: 32,
		address: 'Sydney No. 1 Lake Park',
		startDate: '2002-10-10',
		endDate: '2007-10-10',
		description: '',
		status: 1,
	},
	{
		key: '12',
		name: 'Joe Black',
		age: 32,
		address: 'Sydney No. 1 Lake Park',
		startDate: '2002-10-10',
		endDate: '2007-10-10',
		description: '',
		status: 1,
	},
	{
		key: '10',
		name: 'Jim Red',
		age: 32,
		address: 'London No. 2 Lake Park',
		startDate: '2002-10-10',
		endDate: '2007-10-10',
		description: '',
		status: 2,
	},
];
const WStatus = data.filter((todo) => todo.status === 0);
const AStatus = data.filter((todo) => todo.status === 1);
const DStatus = data.filter((todo) => todo.status === 2);
const WColumns = [
	{
		title: 'Name',
		dataIndex: 'name',
		filters: WStatus.map((todo) => ({ text: todo.name, value: todo.name })),
		filterMode: 'tree',
		filterSearch: true,
		onFilter: (value, record) => record.name.startsWith(value),
		width: '25%',
	},

	{
		title: 'StartDate',
		dataIndex: 'startDate',
		width: '30%',
	},
	{
		title: 'EndDate',
		dataIndex: 'endDate',
		width: '30%',
	},
	{
		title: 'Description',
		dataIndex: 'description',
		filters: WStatus.map((todo) => ({ text: todo.description, value: todo.description })),
		filterMode: 'tree',
		filterSearch: true,
		onFilter: (value, record) => record.description.startsWith(value),
		width: '20%',
	},
];
const AColumns = [
	{
		title: 'Name',
		dataIndex: 'name',
		filters: AStatus.map((todo) => ({ text: todo.name, value: todo.name })),
		filterMode: 'tree',
		filterSearch: true,
		onFilter: (value, record) => record.name.startsWith(value),
		width: '25%',
	},

	{
		title: 'StartDate',
		dataIndex: 'startDate',
		width: '30%',
	},
	{
		title: 'EndDate',
		dataIndex: 'endDate',
		width: '30%',
	},
	{
		title: 'Description',
		dataIndex: 'description',
		filters: AStatus.map((todo) => ({ text: todo.description, value: todo.description })),
		filterMode: 'tree',
		filterSearch: true,
		onFilter: (value, record) => record.description.startsWith(value),
		width: '20%',
	},
];
const DColumns = [
	{
		title: 'Name',
		dataIndex: 'name',
		filters: DStatus.map((todo) => ({ text: todo.name, value: todo.name })),
		filterMode: 'tree',
		filterSearch: true,
		onFilter: (value, record) => record.name.startsWith(value),
		width: '25%',
	},

	{
		title: 'StartDate',
		dataIndex: 'startDate',
		width: '30%',
	},
	{
		title: 'EndDate',
		dataIndex: 'endDate',
		width: '30%',
	},
	{
		title: 'Description',
		dataIndex: 'description',
		filters: DStatus.map((todo) => ({ text: todo.description, value: todo.description })),
		filterMode: 'tree',
		filterSearch: true,
		onFilter: (value, record) => record.description.startsWith(value),
		width: '20%',
	},
];

const onChange1 = (pagination, filters, sorter, extra) => {
	console.log('params', pagination, filters, sorter, extra);
};
const WTable = () => (
	<Table
		columns={WColumns}
		dataSource={WStatus}
		onChange={onChange1}
		pagination={{
			pageSize: 7,
		}}
	/>
);
const ATable = () => (
	<Table
		columns={AColumns}
		dataSource={AStatus}
		onChange={onChange1}
		pagination={{
			pageSize: 7,
		}}
	/>
);
const DTable = () => (
	<Table
		columns={DColumns}
		dataSource={DStatus}
		onChange={onChange1}
		pagination={{
			pageSize: 7,
		}}
	/>
);

const items = [
	{
		key: '1',
		label: `Waiting`,
		children: <WTable />,
	},
	{
		key: '2',
		label: `Approved`,
		children: <ATable />,
	},
	{
		key: '3',
		label: `Denied`,
		children: <DTable />,
	},
];
const Tab = () => <Tabs defaultActiveKey='1' items={items} onChange={onChange} />;

export default function Contracts() {
	return (
		<Card style={{ width: 1000 }}>
			<Tab />
		</Card>
	);
}
