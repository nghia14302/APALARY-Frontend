import { Button, Input, InputNumber } from 'antd';

export const formConfig = [
	{
		label: 'Title',
		name: 'title',
		Element: <Input style={{ width: '100%' }} />,
		rules: [{ required: true, message: 'Please input title' }],
	},
	{
		label: 'Base Salary',
		name: 'baseSalary',
		type: 'number',
		Element: <InputNumber prefix='$' style={{ width: '100%' }} />,
		rules: [
			{ type: 'number', min: 0, message: 'Please, Enter a valid number' },
			{ required: true, message: 'Please input a valid number' },
		],
	},
	{
		label: 'Max Employee',
		name: 'maxEmployee',
		type: 'number',
		Element: <InputNumber style={{ width: '100%' }} />,
		rules: [
			{ type: 'number', min: 0, message: 'Please, Enter a valid number' },
			{ required: true, message: 'Please input a valid number' },
		],
	},
	{
		label: 'Department ID',
		name: 'departmentId',
		type: 'number',
		Element: <InputNumber style={{ width: '100%' }} />,
		rules: [{ required: true, message: 'Please input title' }],
	},
];
