import {
	AppstoreOutlined,
	ContainerOutlined,
	MenuFoldOutlined,
	PieChartOutlined,
	SendOutlined,
	UsergroupAddOutlined,
	UserOutlined,
} from '@ant-design/icons';

export const routeKey = {
	dashBoard: '/dashboard',
	employees: '/employees',
	employeesAll: '/employees/all',
	employeesContracts: '/employees/contracts',
	employeesSalaries: '/employees/salaries',
	applications: '/application',
	applicationSalaryIncreasing: '/application/salary-increasing',
	applicationDayLeave: '/application/day-leave',
	applicationRecruitment: '/application/recruitment',
	posts: '/posts',
	applicants: '/applicants',
};

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
	getItem('Dashboard', routeKey.dashBoard, <PieChartOutlined />),
	getItem('Employees', routeKey.employees, <UserOutlined />, [
		getItem('All', routeKey.employeesAll),
		getItem('Contracts', routeKey.employeesContracts),
		getItem('Salaries', routeKey.employeesSalaries),
	]),
	getItem('Applications', routeKey.applications, <MenuFoldOutlined />, [
		getItem('Salary increasing', routeKey.applicationSalaryIncreasing),
		getItem('Day leave', routeKey.applicationDayLeave),
		getItem('Recruitment', routeKey.applicationRecruitment),
	]),
	getItem('Posts', routeKey.posts, <SendOutlined />),
	getItem('Applicants', routeKey.applicants, <UsergroupAddOutlined />),
];
