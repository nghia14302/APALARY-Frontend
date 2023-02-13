import { createContext, useContext, useEffect, useRef, useState } from 'react';

import { Col, Input, Row, Space, Table } from 'antd';

import Box from '../../components/Box';
import SearchBar from '../../components/SearchBar';
import CustomTable from '../../components/Table';
import { postColumns } from './ColumnConfig';
import { PostSpace } from './style';

export const JobOffering = () => {
	const [data, setData] = useState();
	const [filteredData, setFilteredData] = useState();
	const searchRef = useRef('');
	const [searchText, setSearchText] = useState('');
	const [loading, setLoading] = useState(false);
	const [tableParams, setTableParams] = useState({
		pagination: {
			current: 1,
			pageSize: 10,
		},
	});
	const fetchData = () => {
		setLoading(true);
		fetch(`https://randomuser.me/api?results=20&seed=abc`)
			.then((res) => res.json())
			.then(({ results }) => {
				setData(results);
				setFilteredData(results);
				setLoading(false);
				setTableParams({
					...tableParams,
					pagination: {
						...tableParams.pagination,
						// 200 is mock data, you should read it from server
					},
				});
			});
	};
	const handleTableChange = (pagination, filters, sorter) => {
		setTableParams({
			pagination,
			filters,
			...sorter,
		});

		// `dataSource` is useless since `pageSize` changed
		if (pagination.pageSize !== tableParams.pagination?.pageSize) {
			setData([]);
		}
	};
	const onSearch = (value) => {
		searchRef.current = value;
		setFilteredData(
			data.filter((item) => {
				return item.name.first.toLowerCase().includes(value.toLowerCase());
			})
		);
		setSearchText(value);
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<Box direction='vertical'>
			<CustomTable
				rowKey={(record) => record.login.uuid}
				dataSource={filteredData}
				pagination={tableParams.pagination}
				loading={loading}
				onSearch={onSearch}
				onChange={handleTableChange}
				columns={postColumns}
			/>
		</Box>
	);
};

export default JobOffering;
