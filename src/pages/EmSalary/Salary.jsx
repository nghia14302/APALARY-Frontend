import React, { useState, useEffect } from 'react';

import { Card, Col, Row, Layout, Collapse } from 'antd';
import { NavLink } from 'react-router-dom';

import Profile from '../Profile/data.js';
import data from './data.js';

import { MoneyCollectOutlined } from '@ant-design/icons';
import { Column } from '@ant-design/plots';

const { Content, Header, Footer } = Layout;

export const SalaryChart = () => {
	const config = {
		data,
		xField: 'month',
		yField: 'sales',
		label: {
			position: 'middle',

			style: {
				fill: '#FFFFFF',
				opacity: 0.6,
			},
		},
		xAxis: {
			label: {
				autoHide: true,
				autoRotate: false,
			},
		},
		meta: {
			type: {
				alias: 'Month',
			},
			sales: {
				alias: 'Sale',
			},
		},
	};
	return <Column {...config} />;
};

const emSalary = () => {
	const { salary } = Profile[0];
	return (
		<Card>
			<Row style={{ marginBottom: 50 }}>
				<Col span={10} offset={1}>
					<NavLink to='/contract'>
						<Card
							type='inner'
							title='Base Salary'
							bordered={false}
							style={{ textAlign: 'center', borderStyle: 'solid' }}
						>
							<Row>
								<Col span={12} offset={6}>
									<h1>{salary}$</h1>
								</Col>
							</Row>
						</Card>
					</NavLink>
				</Col>
				<Col span={10} offset={2}>
					<NavLink to=''>
						<Card
							type='inner'
							title='Salary'
							bordered={false}
							style={{ textAlign: 'center', borderStyle: 'solid' }}
						>
							<Row>
								<Col span={12} offset={6}>
									<h1>{salary}$</h1>
								</Col>
							</Row>
						</Card>
					</NavLink>
				</Col>
			</Row>
			<Layout style={{ margin: '0 100px' }}>
				<Content style={{ margin: '0 50px' }}>
					<Card style={{ margin: '0 50px' }}>
						<SalaryChart />
					</Card>
				</Content>
				<Footer></Footer>
			</Layout>
		</Card>
	);
};
export default emSalary;
