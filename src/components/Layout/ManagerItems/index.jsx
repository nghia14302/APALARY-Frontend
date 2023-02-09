import {
	AppstoreOutlined,
	ContainerOutlined,
	MenuFoldOutlined,
	PieChartOutlined,
	UserOutlined,
} from '@ant-design/icons';

const getItem = (label, key, icon, children, type) => {
	return {
		label,
		key,
		icon,
		children,
		type,
	};
};
export const managerItems = [
	getItem('Dashboard', 'managerDashboard', <PieChartOutlined />),
	getItem('Employees', 'managerSubEmployees', <UserOutlined />, [
		getItem('All', '3'),
		getItem('Contracts', '4'),
		getItem('Salaries', '5'),
	]),
	getItem('Applications', 'managerApplications;', <MenuFoldOutlined />, [
		getItem('Salary increasing', '6'),
		getItem('Day leave', '7'),
		getItem('Recruitment Requests', '8'),
	]),
	getItem('Posts', 'managerPosts', <PieChartOutlined />),
	getItem('Applicants', 'managerApplicants', <PieChartOutlined />),
];
