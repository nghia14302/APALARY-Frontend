import { useEffect } from 'react';
import { useState } from 'react';

import { Col, Row, Space, Table } from 'antd';

import careerImg from '../../../assets/homepage/career-bg.jpg';
import jobOfferingApi from '../../../utils/Apis/jobOffering';
import { buttonStyle, componentStyle, imgStyle, titleStyle } from './styles';

const { Column } = Table;

export default function Career() {
	const [list, setList] = useState([]);

	useEffect(() => {
		jobOfferingApi.getJobOffering().then((jobOffering) => {
			const realData = jobOffering.data.map((todo, index) => ({
				...todo,
				key: index,
				baseSalary: todo.baseSalary + ' $',
			}));
			setList(realData);
		});
	}, []);

	return (
		<Row style={componentStyle} justify='space-between'>
			<Col span={8}>
				<img src={careerImg} alt='career list' style={imgStyle} />
			</Col>
			<Col span={15}>
				<h3 style={titleStyle}>Career</h3>
				<Table dataSource={list} pagination={{ pageSize: 7 }}>
					<Column title='Title' dataIndex='title' key='title' width={150} />
					<Column
						title='Description'
						dataIndex='description'
						key='description'
						ellipsis={true}
						// width={400}
					/>
					<Column title='Quantity' dataIndex='maxEmployee' key='maxEmployee' width={90} />
					<Column
						title='Base Salary'
						dataIndex='baseSalary'
						key='baseSalary'
						width={80}
						style={{ textAlign: 'center' }}
					/>
					<Column
						title='Action'
						key='action'
						render={({ id }) => (
							<Space size='middle'>
								<a style={buttonStyle}>Detail</a>
								<a style={buttonStyle}>Apply</a>
							</Space>
						)}
						width={115}
					/>
				</Table>
			</Col>
		</Row>
	);
}
