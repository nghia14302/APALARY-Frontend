import { createContext, useContext, useEffect, useRef, useState } from 'react';

import Box from '../../components/Box';
import CustomCard from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import CustomTable from '../../components/Table';
import toast from '../../components/Toast';
import { paginationConfig, postColumns } from '../../config/ColumnConfig';
import jobOfferingApi from '../../utils/Apis/jobOffering';
import useSearch from '../../utils/hooks/useSearch';

export const JobOffering = () => {
	const [data, setData] = useState();
	const [filteredData, setFilteredData] = useState();
	// const searchRef = useRef('');
	// const [searchText, setSearchText] = useState('');
	const [searchText, searchRef, onSearchChange] = useSearch();
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
					toast('success', 'Successfully fetched data');
				})
				.catch((err) => {
					console.log(err);
					toast('error', 'Failed to fetch data');
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
					addNewButton={true}
					onSearch={onSearchChange}
					onChange={handleTableChange}
					columns={postColumns}
				/>
			</Box>
		</CustomCard>
	);
};

export default JobOffering;
