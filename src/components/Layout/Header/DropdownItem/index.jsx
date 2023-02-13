import { Space, Typography } from 'antd';

const { Text } = Typography;
const items = [
	{
		key: '/logout',
		label: (
			<Space style={{ width: '120px' }}>
				<Text>Logout</Text>
			</Space>
		),
	},
];

export default items;
