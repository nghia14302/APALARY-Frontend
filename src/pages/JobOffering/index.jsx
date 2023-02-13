import { createContext, useContext, useEffect, useRef, useState } from 'react';

import { Col, Input, Row, Space, Table } from 'antd';

import Box from '../../components/Box';
import SearchBar from '../../components/SearchBar';
import CustomTable from '../../components/Table';
import { postColumns } from './ColumnConfig';
import { PostSpace } from './style';

const searchRef = createContext();

export const JobOffering = () => {
	const [data, setData] = useState();
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
		setSearchText(value);
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<Box direction='vertical'>
			<Row justify='end'>
				<Col>
					<SearchBar placeholder='Search by name' enterButton onSearch={onSearch} />
				</Col>
			</Row>
			<Box>
				<CustomTable
					rowKey={(record) => record.login.uuid}
					dataSource={data}
					pagination={tableParams.pagination}
					loading={loading}
					onChange={handleTableChange}
					columns={postColumns}
				/>
			</Box>
		</Box>
	);
};

export default JobOffering;
