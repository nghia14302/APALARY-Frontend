import { useState } from 'react';

import { Button, Space, Typography } from 'antd';
import { Editor } from 'react-draft-wysiwyg';
import { Link, Navigate } from 'react-router-dom';

import CustomEditor from '../../components/Editor';
import { routeKey } from '../../components/Layout/ManagerItems';
import { apiHandler } from '../../utils/Apis/handler';
import jobOfferingApi from '../../utils/Apis/jobOffering';
import { convertToEditor, getValueFromBlock } from '../../utils/DraftjsHelper';
import { usePersistedState } from '../../utils/LocalStorage/usePersistedState';
import LocalStorageUtils from '../../utils/LocalStorage/utils';

const { Text } = Typography;

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
		title: 'Department',
		dataIndex: 'department',
		sorter: true,
	},
	{
		title: 'Action',
		showStatus: 'waiting',
		render: (_, record) =>
			record.status === 'waiting' && (
				<Space size='middle'>
					<Link to={`${routeKey.applicants}/${record.id}`}>Approve</Link>
					<Link to={`${routeKey.applicants}/${record.id}`}>Delete</Link>
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
		render: (value) => <Text>{getValueFromBlock(JSON.parse(value))}</Text>,
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
