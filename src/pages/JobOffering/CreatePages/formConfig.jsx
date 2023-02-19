import { Button } from 'antd';

export const formConfig = [
	{
		label: 'Title',
		name: 'title',
		rules: [{ require: true, message: 'Please input title' }],
	},
	{
		label: 'Base Salary',
		name: 'baseSalary',
		type: 'number',
		rules: [{ require: true, message: 'Please input a valid number' }],
	},
	{
		label: 'Max Employee',
		name: 'maxEmployee',
		type: 'number',
		rules: [{ require: true, type: 'number', message: 'Please input a valid number' }],
	},
	{
		label: 'Department',
		name: 'department',
		rules: [{ require: true, message: 'Please input title' }],
	},
];
