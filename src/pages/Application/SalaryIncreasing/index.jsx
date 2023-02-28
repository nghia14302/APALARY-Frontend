import React, { useState } from 'react';

import { Modal, Typography } from 'antd';
import { Link } from 'react-router-dom';

import Box from '../../../components/Box';
import CustomCard from '../../../components/Card';
import CustomTable from '../../../components/Table';
import useSearch from '../../../utils/hooks/useSearch';
import ApplicationModal from '../Modal';
import { salaryColumnConfig } from '../columnConfig';

const ApplicationSalary = () => {
	const [data, setData] = useState([
		{
			name: 'Salary',
			description: 'Salary',
			department: 'Salary',
			baseSalary: 'Salary',
		},
	]);
	const [search, searchRef, setSearchChange] = useSearch();
	const [openModal, setOpenModal] = useState(false);
	return (
		<CustomCard>
			<CustomTable dataSource={data} onSearch={setSearchChange}>
				{salaryColumnConfig.map((column, index) => (
					<CustomTable.Column
						key={index}
						title={column.title}
						dataIndex={column.dataIndex}
						width={column.width}
						render={column.render}
					/>
				))}
				<CustomTable.Column
					title='Action'
					key='action'
					render={(text, record) => (
						<Box display='flex' justifyContent='center'>
							<Link onClick={() => setOpenModal(true)}>View</Link>
						</Box>
					)}
				/>
			</CustomTable>
			<ApplicationModal open={openModal} setOpen={setOpenModal} />
		</CustomCard>
	);
};

export default ApplicationSalary;
