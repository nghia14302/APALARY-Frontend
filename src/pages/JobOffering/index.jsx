import { createContext, useContext, useEffect, useRef, useState } from 'react';

import { Col, Input, Row, Space, Table } from 'antd';

import Box from '../../components/Box';
import CustomCard from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import CustomTable from '../../components/Table';
import jobOfferingApi from '../../utils/Apis/jobOffering';
import { paginationConfig, postColumns } from './ColumnConfig';
import { PostSpace } from './style';
import { useFetch } from './useFetch';

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
				return item.title.toLowerCase().includes(value.toLowerCase());
			})
		);
		setSearchText(value);
	};

	// Fetching data from jobOfferingApi
	useEffect(() => {
		const fetch = async () => {
			setLoading(true);
			await jobOfferingApi
				.getJobOffering()
				.then((res) => {
					if (res.data.status === 403) {
						setData([]);
						return;
					}
					setData(res.data);
					setFilteredData(res.data);
					console.log(res.data);
				})
				.finally(() => {
					setLoading(false);
				});
		};
		fetch();
	}, []);
	return (
		<CustomCard>
			<Box direction='vertical'>
				<CustomTable
					rowKey={(record) => record.id + 'job-offering'}
					dataSource={filteredData}
					loading={loading}
					pagination={{
						...paginationConfig,
					}}
					onSearch={onSearch}
					onChange={handleTableChange}
					columns={postColumns}
				/>
			</Box>
		</CustomCard>
	);
};

export default JobOffering;
