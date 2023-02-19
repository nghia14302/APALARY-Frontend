import { useState, useEffect } from 'react';

import Box from '../../components/Box';
import CustomCard from '../../components/Card';
import CustomTable from '../../components/Table';
import { applicantColumns, paginationConfig } from '../../config/ColumnConfig';
import applicantAPI from '../../utils/Apis/applicantAPI';
import { apiHandler } from '../../utils/Apis/handler';
import useSearch from '../../utils/hooks/useSearch';
import { fakeData } from './dummy.data';

const Applicants = () => {
	const [loading, setLoading] = useState(false);
	const [filteredData, setFilteredData] = useState(fakeData);
	const [data, setData] = useState(fakeData);
	const [search, searchRef, onSearchChange] = useSearch();
	const [activeKey, setActiveKey] = useState('waiting');

	const onTabChange = (key) => {
		setActiveKey(key);
		setFilteredData(data.filter((item) => item.status === key));
	};

	useEffect(() => {
		setLoading(true);
		const fetch = async () => {
			const res = await apiHandler(applicantAPI, 'get', setLoading, 'success').catch(() => {
				return [];
			});

			setData(res || []);
		};
		fetch();
	}, []);

	useEffect(() => {
		const tmp = data.filter(
			(item) =>
				item.name.toLowerCase().includes(search.toLowerCase()) && item.status === activeKey
		);
		setFilteredData(tmp);
	}, [searchRef, activeKey]);
	return (
		<CustomCard>
			<Box direction='vertical'>
				<CustomTable
					onTabChange={onTabChange}
					activeKey={activeKey}
					rowKey={(record) => record.id + 'applicants'}
					onSearch={onSearchChange}
					columns={applicantColumns.filter(
						// check the column action only show when the current tab is waiting
						(column) => !column.showStatus || column.showStatus === activeKey
					)}
					loading={loading}
					pagination={{
						...paginationConfig,
					}}
					dataSource={filteredData}
				/>
			</Box>
		</CustomCard>
	);
};

export default Applicants;
