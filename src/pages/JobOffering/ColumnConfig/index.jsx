export const postColumns = [
	{
		title: 'Job title',
		dataIndex: 'name',
		sorter: true,
		render: (name) => `${name.first} ${name.last}`,
		width: '20%',
	},
	{
		title: 'Department',
		dataIndex: 'gender',
		filters: [
			{
				text: 'Male',
				value: 'male',
			},
			{
				text: 'Female',
				value: 'female',
			},
		],
		width: '20%',
	},
	{
		title: 'Salary',
		dataIndex: 'email',
	},
	{
		title: 'Max Employee',
		dataIndex: 'email',
	},
	{
		title: 'status',
		dataIndex: 'email',
	},
];
