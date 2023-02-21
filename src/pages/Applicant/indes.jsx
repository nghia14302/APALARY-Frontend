import { useState, useEffect } from 'react';

import Box from '../../components/Box';
import CustomCard from '../../components/Card';
import CustomTable from '../../components/Table';
import { applicantColumns, paginationConfig } from '../../config/ColumnConfig';
import applicantAPI from '../../utils/Apis/applicantAPI';
import { apiHandler } from '../../utils/Apis/handler';
import useSearch from '../../utils/hooks/useSearch';

const Applicants = () => {
	const [loading, setLoading] = useState(false);
	const [filteredData, setFilteredData] = useState([]);
	const [data, setData] = useState([]);
	const [search, searchRef, onSearchChange] = useSearch();

	useEffect(() => {
		setLoading(true);
		const fetch = async () => {
			const res = await apiHandler(applicantAPI, 'get', 'success')
				.catch(() => {
					return [];
				})
				.finally(() => {
					setLoading(false);
				});
			setData(res || []);
		};
		fetch();
	}, []);

	useEffect(() => {
		setFilteredData(data.filter((item) => item.name.toLowerCase().includes(search)));
	}, [searchRef]);
	return (
		<CustomCard>
			<Box direction='vertical'>
				<CustomTable
					rowKey={(record) => record.id + 'applicants'}
					onSearch={onSearchChange}
					columns={applicantColumns}
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
